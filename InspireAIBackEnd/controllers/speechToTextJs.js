import axios from 'axios'
import fs from 'fs';
export const speechToTextJs = async (req, res) => {
  try {
    //const audioBuffer = req.file.buffer; 
    console.log(req)
    let data = ''
    
    req.on('data', chunk => {
        data += chunk;
    })

    req.on('end', () => {
        fs.writeFileSync('audio.mp3', data)
    })
    
    

    return res.send('ok');
/*

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
  
*/
   } catch (err) {
  console.log(err)


}
};
