import { isObject } from './is'

export function deepMerge<T = any>(source: any = {}, target: any = {}): T {
  let key: string
  for (key in target)
    source[key] = isObject(source[key])
      ? deepMerge(source[key], target[key])
      : (source[key] = target[key])

  return source
}

/**
 * Add the object as a parameter to the URL
 * @param baseUrl url
 * @param obj
 * @returns {string}
 * eg:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = ''
  for (const key in obj) parameters += `${key}=${encodeURIComponent(obj[key])}&`

  parameters = parameters.replace(/&$/, '')
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters
}

export const extend = Object.assign

export const restRefsKey = (refs) => {
  for (const [_key, ref] of Object.entries(refs)) {
    (ref as any).value = null
  }
}
// 
/** 针对 区域结构的树 进行对它的一个转换变成一个对象数组
 * Example usage:
    const data:NodeType[] = [
      {
        name: '温州市',
        areaId: '1',
        id: '01',
        children: [
          {
            name: '乐清市',
            areaId: '02',
            pid: '01',
            id: '002',
            children: [
              {
                name: '北白象镇',
                areaId: '003',
                pid: '002',
                id: '0003',
              },
            ],
          },
        ],
      },
    ];
    constructFullName(data); 
 */
interface NodeType {
  [key: string]: any
}
interface NodeConfigType {
  nameAttr: string
  areaIdAttr: string
  idAttr: string
  childrenAttr: string
}
export function constructFullName(data: NodeType[], config: NodeConfigType = {
  nameAttr: 'name',
  areaIdAttr: 'areaId',
  idAttr: 'id',
  childrenAttr: 'children',
}, parentNames = '') {
  const { nameAttr, areaIdAttr, idAttr, childrenAttr } = config;
  const result: NodeType[] = [];

  for (const node of data) {
    const name: string = node[nameAttr];
    const areaId: string = node[areaIdAttr];
    const id: string = node[idAttr];
    const children: NodeType[] = node[childrenAttr];

    const currentFullName = parentNames ? `${parentNames}-${name}` : name;
    result.push({ [areaIdAttr]: areaId, [nameAttr]: currentFullName, [idAttr]: id });

    if (children && children.length > 0) {
      result.push(...constructFullName(children, config, currentFullName));
    }
  }

  return result;
}
