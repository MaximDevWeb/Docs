export class Controllers {
  request
  response
  params

  static init(req, res) {
    const obj = new this()
    obj.request = req
    obj.response = res
    obj.params = req.params

    return obj
  }
}