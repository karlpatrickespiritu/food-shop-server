
class A {
  foo () {
    this.bar()
  }
  bar () {
    console.log('har')
  }
}

new A().foo()
