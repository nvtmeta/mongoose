const express = require('express')
const router = express.Router()
// Load model
const Post = require('../models/Post')



router.get('/post', (req, res) => {
    res.render('post.ejs')
})

// create new post

router.post('/post', async (req, res) => {
    const { title, text } = req.body
    console.log(title, text)
    let errors = {}
    if (!title) errors.push({ msg: 'Title required' })
    if (!text) errors.push({ msg: 'Text required' })
    if (errors.length > 0) {
        res.render('post.ejs', { title, text })
    }
    else {
        const newPostData = { title, text }
        const newPost = new Post(newPostData)
        await newPost.save()
        res.redirect('/')
    }
})


// display users

router.get('/', async (req, res) => {
    const posts = await Post.find().lean().sort({ date: -1 })
    console.log(posts)
    res.render('home.ejs', { posts })
})

// edit users

router.get('/edit/:id', async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id }).lean()
    res.render('edit', { post })
})

// update user into db
router.put('/edit/:id', async (req, res) => {
    const { title, text } = req.body
    await Post.findOneAndUpdate({ _id: req.params.id }, { title, text })
    res.redirect('/')
})

// delete
router.get('/delete/:id', async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id }).lean()
    res.render('delete', { post })
})

router.put('/delete/:id', async (req, res) => {
    await Post.findOneAndDelete({ _id: req.params.id })
    res.redirect('/')
})

module.exports = router