
import { useCallback } from 'react';
// import { getLocale } from 'umi';

function getStreamReader(file, chunkSize = 1024 * 1024) {
  let reader = new FileReader();
  let offset = 0;
  return function () {
    return new Promise(function (resolve, reject) {
      if (offset >= file.size) return resolve(null);
      reader.onloadend = function () {
        resolve(reader.result);
        offset = offset + chunkSize;
      }
      reader.onerror = reject;
      reader.readAsArrayBuffer(file.slice(offset, offset + chunkSize));
    });
  }
}


export default () => {

  const onSelectFile = useCallback(() => {
    const selectedFile = document.getElementById('input').files[0];
    console.log(selectedFile);
    let read = getStreamReader(selectedFile);
    (async () => {
      let chunk;
      while (chunk = await read()) {
        console.log(chunk);
      }
    })();
  }, []);
  return (

    <div>
      <input id="input" type="file" onChange={onSelectFile} />
    </div>

  );
}
