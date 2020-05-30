
import COS from 'cos-js-sdk-v5';

const cos = new COS({
  SecretId: 'COS_SECRETID',
  SecretKey: 'COS_SECRETKEY',
});

const COS_CONFIG = {
  Bucket: 'examplebucket-1250000000', /* 必须 */
  Region: 'COS_REGION',

}

const noop = () => {};
// export default cos;


const OSS = {
  OSS: cos,
  queryById(Key, errorCallback = noop) {
    return cos.getObject({
      ...COS_CONFIG,
      Key,
    }, errorCallback)
  },
  delById(Key, errorCallback = noop) {
    return cos.deleteObject({
      ...COS_CONFIG,
      Key,
    }, errorCallback)
  },
  queryList(Prefix, errorCallback = noop) {
    return cos.getObject({
      ...COS_CONFIG,
      Prefix,
    }, errorCallback)
  },
  put({ Body, onProgress }, errorCallback = noop) {
    return cos.putObject({
      ...COS_CONFIG,

    }, errorCallback)
  }
}

export default OSS;
