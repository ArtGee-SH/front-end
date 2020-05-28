
import  { shuffle, keys } from 'lodash'

const images = [
  'http://img0.imgtn.bdimg.com/it/u=2654247859,2161899795&fm=26&gp=0.jpg',
  'http://img2.imgtn.bdimg.com/it/u=904898181,122474501&fm=26&gp=0.jpg',
  'http://img4.imgtn.bdimg.com/it/u=373891795,2149002189&fm=26&gp=0.jpg',
  'http://img3.imgtn.bdimg.com/it/u=2140077560,708851101&fm=26&gp=0.jpg',
  'http://img3.imgtn.bdimg.com/it/u=1523679166,1622551139&fm=26&gp=0.jpg',
  'http://img5.imgtn.bdimg.com/it/u=1382139364,1433136823&fm=26&gp=0.jpg',
  'http://img1.imgtn.bdimg.com/it/u=2137944069,1596700198&fm=26&gp=0.jpg',
  'http://img2.imgtn.bdimg.com/it/u=2167386944,3047195212&fm=26&gp=0.jpg',
  'http://img5.imgtn.bdimg.com/it/u=205129600,3800139997&fm=26&gp=0.jpg',
  'http://img2.imgtn.bdimg.com/it/u=3692832070,856580096&fm=26&gp=0.jpg',
  'http://img5.imgtn.bdimg.com/it/u=2888258427,2469134874&fm=26&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=1620609776,1825794982&fm=26&gp=0.jpg',
]

export const getRandomImage = () => {
  return shuffle(images)[0];
}

/**
 * object to array
 *
 * @param   {[type]}  obj  [obj to resolve]
 * @param   {[type]}  fn  [ resolve custom]
 *
 * @return  {[type]}       [return description]
 */
export const objectToArr = (obj, fn) => {
  return keys(obj).reduce((result, cur) => {

    return [...result, fn ? fn(cur, obj[cur]) : {
      ...obj[cur],
      __id: cur,
    }]
  }, []);
}

/**
 * change hex to string;
 */
export const hexToStr = (num, radix = 16) => {
  return Number(num).toString(radix);
}
