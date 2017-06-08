const rucksack = require('rucksack-css');
const lost = require('lost');
const cssnext = require('postcss-cssnext');
const simplevars = require('postcss-simple-vars');
const Feed = require('feed');
const fs = require('fs');

exports.modifyWebpackConfig = function (config) {
  config.merge({
    postcss: [
      lost(),
      rucksack(),
      simplevars(),
      cssnext({
        browsers: ['>1%', 'last 2 versions'],
      }),
    ],
  });

  config.loader('svg', {
    test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
  });

  return config;
};


exports.postBuild = function(pages, callback) {

  console.log("Generating RSS 2.0 Feed")
  let feed = new Feed({
    title: 'Agni',
    description: 'default',
    id: 'example.com',
    link: 'example.com',
    image: 'image.jpg',
    copyright: 'All rights reserved 2017, Agni',
    author: {
      name: 'Agni',
      email: 'info@agni.io',
      link: 'Agni',
    },
  });
  // perform actions on pages here
  for (let i = pages.length - 1; i >= 0; i -= 1) {
    const page = pages[i];
    const layout = page.data.layout;
    if (layout === 'post') {
      const post = page.data;
      feed.addItem({
        title: post.title,
        id: post.path,
        link: `https://lute.io${post.path}`,
        description: post.description,
        author: post.author,
        date: post.date,
        category: post.category,
      });
    }
  }
  fs.writeFileSync("public/rss.xml", feed.rss2());
  process.exit();
  callback()
}
