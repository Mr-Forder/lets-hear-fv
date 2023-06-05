 import Layout from "src/components/layout";
 import FirebaseAuth from "src/components/firebaseAuth";
 import { GetServerSideProps, NextApiRequest } from "next";
 import { loadIdToken } from "src/auth/firebaseAdmin";


//NEXTJS IS FULLSTACK - IT RUNS ON CLIENT, BUT ALSO HAS SOME FUNCTIONALITY THAT RUNS ON SERVER. ANY PAGE IN THE PAGES/API FOLDER WILL RUN ON THE SERVER
export default function Auth() {
  return <Layout main={
  
<div className="dark:bg-gray-900 min-h-screen pt-16" >
  <FirebaseAuth/>

</div>

}/>;
}


export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  const uid = await loadIdToken(req as NextApiRequest);

  if (uid) {//if user id is found
    res.setHeader("location", "/");//redirect authorised user to homepage
    res.statusCode = 302;//set status code 302 
    res.end()//end response
 }
  
  return { props: {}}
}