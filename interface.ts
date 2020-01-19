interface Man {
  sex: string
  age: number
}

let wang: Man = { sex: 'nan', age: 18 }

// 规范函数类型的接口

interface search {
  (name: string, age: number): string
}

let woman: search

woman = function(name: string, age: number): string {
  let result: string = name + age
  return result
}

woman('yang', 78)

console.log(woman('yang', 78))
