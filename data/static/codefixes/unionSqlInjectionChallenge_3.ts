module.exports = function searchProducts () {
  return (req: Request, res: Response, next: NextFunction) => {
    let criteria: any = req.query.q === 'undefined' ? '' : req.query.q ?? ''
    criteria = (criteria.length <= 200) ? criteria : criteria.substring(0, 200)
    // only allow apple or orange related searches
    if (!criteria.startsWith("apple") || !criteria.startsWith("orange")) {
      res.status(400).send()
      return
    }
  }
}