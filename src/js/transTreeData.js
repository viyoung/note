let dep = [
  { id: 1, label: '陕西省人民政府', pid: 0 },
  { id: 2, label: '咸阳市人民政府', pid: 1 },
  { id: 3, label: '汉中市人民政府', pid: 1 },
  { id: 4, label: '乾县人民政府', pid: 2 },
  { id: 5, label: '南郑县人民政府', pid: 3 },
  { id: 6, label: '新集镇人民政府', pid: 5 },
  { id: 7, label: '大杨乡人民政府', pid: 4 }
]
/**
 * @description 将平行数据按照pid进行归类出来
 * @param {Array} list
 * @param {string|Number} node
 */
function getTrees(list, node) {
  let item = []
  for (let i = 0; i < list.length; i++) {
    let key = list[i].pid
    if (item[key]) {
      item[key].push(list[i])
    } else {
      item[key] = []
      item[key].push(list[i])
    }
  }
  return formatTree(item, node)
}
/**
 * @description 使用递归进行格式化每个点
 * @param {Array} item
 * @param {String|Number} node
 */
function formatTree(item, node) {
  let result = []
  if (!item[node]) {
    return result
  }
  for (let t of item[node]) {
    t.children = formatTree(item, t.id)
    result.push(t)
  }
  return result
}
console.log(getTrees(dep, 0))
