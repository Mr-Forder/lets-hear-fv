import {
    ObjectType,
    InputType,
    Field,
    ID,
    Float,
    Int,
    Resolver,
    Query,
    Mutation,
    Arg,
    Ctx,
    Authorized,
  } from "type-graphql";
  import { Min, Max } from "class-validator";
  import { getBoundsOfDistance } from "geolib";
  import { Context, AuthorizedContext } from "./context";
  
  @InputType()
  class CoordinatesInput {
    @Min(-90)
    @Max(90)
    @Field((_type) => Float)
    latitude!: number;
  
    @Min(-180)
    @Max(180)
    @Field((_type) => Float)
    longitude!: number;
  }



  @InputType()
  class BoundsInput {
    @Field((_type) => CoordinatesInput)
    sw!: CoordinatesInput;
  
    @Field((_type) => CoordinatesInput)
    ne!: CoordinatesInput;
  }




  
  @InputType()
  class LocationInput {
    @Field((_type) => String)
    address!: string;
  
    @Field((_type) => CoordinatesInput)
    coordinates!: CoordinatesInput;
  
    @Field((_type) => Int)
    rating!: number;

    @Field((_type) => String)
    review!: string;

    @Field((_type) => String)
    loops!: string;
  }
  
  @ObjectType()
  class Location {
    @Field((_type) => ID)
    id!: number;
  
    @Field((_type) => String)
    userId!: string;
  
    @Field((_type) => Float)
    latitude!: number;
  
    @Field((_type) => Float)
    longitude!: number;
  
    @Field((_type) => String)
    address!: string;
  
    @Field((_type) => Int)
    rating!: number;

    @Field((_type) => String)
    review!: string;

    @Field((_type) => String)
    loops!: string;







    @Field((_type) => [Location])
    async nearby(@Ctx() ctx: Context) {
      const bounds = getBoundsOfDistance(
        { latitude: this.latitude, longitude: this.longitude },
        10000
      );
  
      return ctx.prisma.location.findMany({
        where: {
          latitude: { gte: bounds[0].latitude, lte: bounds[1].latitude },
          longitude: { gte: bounds[0].longitude, lte: bounds[1].longitude },
          id: { not: { equals: this.id } },
        },
        take: 25,
      });
    }





  }
  





















  @Resolver()
  export class LocationResolver {

//find single review
    @Query((_returns) => Location, { nullable: true })
    async location(@Arg("id") id: string, @Ctx() ctx: Context) {
      return ctx.prisma.location.findOne({ where: { id: parseInt(id, 10) } });
    }

//find multiple reviews within map boundary
    @Query((_returns) => [Location], { nullable: false })
    async locations(@Arg("bounds") bounds: BoundsInput, @Ctx() ctx: Context) {
      return ctx.prisma.location.findMany({
        where: {
          latitude: { gte: bounds.sw.latitude, lte: bounds.ne.latitude },
          longitude: { gte: bounds.sw.longitude, lte: bounds.ne.longitude },
        },
        take: 50,//how many loactions to return on map at once - max
      });
    }
  
   //MUTATIONS 
  //create a review
    @Authorized()
    @Mutation((_returns) => Location, { nullable: true })
    async createLocation(
      @Arg("input") input: LocationInput,
      @Ctx() ctx: AuthorizedContext
    ) {
        return await ctx.prisma.location.create({
            data: {
              userId: ctx.uid,
              address: input.address,
              latitude: input.coordinates.latitude,
              longitude: input.coordinates.longitude,
              review: input.review,
              rating: input.rating,
              loops: input.loops,
            },
          });
    }

    //update a review

    @Authorized()
    @Mutation((_returns) => Location, { nullable: true })
    async updateLocation(
      @Arg("id") id: string,
      @Arg("input") input: LocationInput,
      @Ctx() ctx: AuthorizedContext
    ) {
      const locationId = parseInt(id, 10);
      const location = await ctx.prisma.location.findOne({ where: { id: locationId } });
  
      if (!location || location.userId !== ctx.uid) return null;
  
      return await ctx.prisma.location.update({
        where: { id: locationId },
        data: {
          address: input.address,
          latitude: input.coordinates.latitude,
          longitude: input.coordinates.longitude,
          rating: input.rating,
          review: input.review,
          loops: input.loops
        },
      });
}

//delete a review
@Authorized()
  @Mutation((_returns) => Boolean, { nullable: false })
  async deleteLocation(
    @Arg("id") id: string,
    @Ctx() ctx: AuthorizedContext
  ): Promise<boolean> {
    const locationId = parseInt(id, 10);
    const location = await ctx.prisma.location.findOne({ where: { id: locationId } });

    if (!location || location.userId !== ctx.uid) return false;

    await ctx.prisma.location.delete({
      where: { id: locationId },
    });
    return true;
  }












  }




