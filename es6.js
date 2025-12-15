class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}
const c1 = new Circle(5);
console.log(c1.getArea());
