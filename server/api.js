const express = require('express')
const router = express.Router()
const db = require('./db')
const fn = () => {}


router.get('/api/getCarts', (req, res) => {
  db.Cart.find(null, 'cname cprice count', (err, doc) => {
    if(err){
      console.log(err)
    }else if(doc){

      res.send(JSON.stringify(doc))
    }
  })
})

router.get('/api/getOrder', (req, res) => {
  db.Order.find(null, 'oname oprice oount', (err, doc) => {
    if(err){
      console.log(err)
    }else if(doc){

      res.send(JSON.stringify(doc))
    }
  })
})


router.post('/api/checkOut', (req, res) => {
  console.log(req.body)
  // if(err){
  //   console.log(err)
  // }
  // const order = req.body.order
  req.body.map((item)=>{

    const cid = item._id
    --item.count
    const newitem = {
      cname: item.cname,
      cprice: item.cprice,
      count: item.count
    }

    db.Cart.findByIdAndUpdate(cid, newitem, fn)

    const neworder = {
      oname: item.cname,
      oprice: item.cprice,
      ocount: 1
    }
    db.Order(neworder).save()
  })
  // order.map((item) => {
  //   const cid = item._id
  //   --item.count
  //   const newitem = {
  //     cname: item.cname,
  //     cprice: item.cprice,
  //     count: item.count
  //   }
  //   db.Cart.findByIdAndUpdate(cid, newitem, fn)
  //   db.Order(item).save()
  // })

})

router.post('/api/addToCart', (req,res) => {
  const gid = req.body.gid

  var cname, count, cprice,update;
  //查询信息
  db.Good.findById(gid, function(err, info){
    if(err){
      console.log(err)
    }else{
      //更新商品库存
      if(info.inventory<=0){
        info.inventory = 0
      }else{
        --info.inventory
        const newgood = {
          gname: info.gname,
          gprice: info.gprice,
          inventory: info.inventory
        }

      db.Good.findByIdAndUpdate(gid, newgood,fn)
      cname = info.gname
      cprice = info.gprice


        db.Cart.findOne({cname: cname},(err,result) => {
          if(err){
            console.log(err)
          }
          if(result != null){
            if(!result.cname){
              console.log('err')

            }else{

              ++result.count
              db.Cart.findOneAndUpdate({cname},result,fn);
            }
          }
          if(result == null){
            const cart = {
              cname: cname,
              cprice: cprice,
              count: 1
            }

            new db.Cart(cart).save()
          }

        })
      }
    }
  })

  res.status(200).end()
})

router.get('/api/getGood', (req, res) => {
  const _id = req.query.id
  db.Good.findOne({_id}, (err, doc) => {
    if (err) {
      console.log(err)
    } else if (doc) {

      res.send(doc)
    }
  })
})

router.get('/api/getGoods', (req, res) => {

  db.Good.find(null, 'gname gprice inventory image', (err, doc) => {
    if (err) {

      console.log(err)

    } else if (doc) {

      res.send(JSON.stringify(doc))
    }
  })

})



router.post('/api/login', (req, res) => {
  const {name, pwd} = req.body
  console.log(req.body)
  db.User.findOne({name: req.body.name}, (err,res)=>{
    if(err){
      console.log(err)

    }else{

      console.log(res)
    }
  })

})

router.post('/api/addUser', (req, res) => {

  const user = {
    name: req.body.name,
    pwd: req.body.pwd
  }


  new db.User(user).save()
  res.status(200).end()
})

router.post('/api/saveGood', (req, res) => {

  const good = {
    gname: req.body.gname,
    gprice: req.body.gprice,
    inventory: req.body.inventory,
    image: req.body.image
  }
  console.log(good)
  new db.Good(good).save()

  res.status(200).end()
})

router.post('/api/deleteGood', (req, res) => {

  db.Good.findByIdAndRemove(req.body.id, fn)
  res.status(200).end()
})

//报错： cannot read property 'find' of undefined
//未解决


// router.post('/api/getLinks', (req, res) => {
//   db.Link.find(null, (err, doc) => {
//     if (err) {
//       console.log(err)
//     } else if (doc) {
//       res.send(doc)
//     }
//   })
// })

// router.post('/api/saveLinks', (req, res) => {
//   const links = req.body || []
//   db.Link.remove(null, fn)
//   const promises = links.map(({name, href}) => new db.Link({name, href}).save())
//   Promise.all(promises)
//     .then(() => res.status(200).end())
//     .catch(() => res.status(500).end())
// })

// router.post('/api/savePwd', (req, res) => {
//   const {name, pwd} = req.body
//   db.User.findOneAndUpdate({name}, {pwd}, fn)
//   res.status(200).end()
// })

module.exports = router
