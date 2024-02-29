import axios from 'axios'

export const test_api = async (req, res) => {
  try {
    const { txt } = req.body;

    console.log(txt)

    


 const requestToLocal=axios({
   method: 'get',
   url: ' http://localhost:5050/api/test',
   headers: {
     'Content-type': 'application/json'
   }
  }
  )
  .then((resp) => {
    return resp.data;
  }).catch(err => {
  console.log('Error', err);
  });

  const respFromLocal = await requestToLocal;
  return res.json({ message: respFromLocal});

   } catch (err) {
  console.log(err)


}
};
