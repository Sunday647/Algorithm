var MinStack = function() {
  this.items = []
  this.min = null
};

// 进栈
MinStack.prototype.push = function(x) {
  if(!this.items.length) this.min = x
  this.min = Math.min(x, this.min)
  this.items.push(x)
};

// 出栈
MinStack.prototype.pop = function() {
  let num = this.items.pop()
  this.min = Math.min(...this.items)
  return num
};

// 获取栈顶元素
MinStack.prototype.top = function() {
  if(!this.items.length) return null
  return this.items[this.items.length -1]
};

// 检索栈中的最小元素
MinStack.prototype.getMin = function() {
  return this.min
};

作者：user7746o
链接：https://leetcode-cn.com/problems/min-stack/solution/zi-jie-leetcode155zui-xiao-zhan-bao-han-getminhan-/
    来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。