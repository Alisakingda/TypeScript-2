class Student {
  public readonly face: string = 'weixiao'
  public sex: string
  protected name: string
  private age: number

  public constructor(sex: string, name: string, age: number) {
    this.sex = sex
    this.name = name
    this.age = age
  }

  public say() {
    console.log('你好')
  }
  protected sayLove() {
    console.log('爱你')
  }
}

// 继承
class SmallStudent extends Student {
  public say() {
    super.say()
    console.log('么么哒')
  }
}

let xiao: SmallStudent = new SmallStudent('男', 'man', 18)

xiao.say()
