function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Wordpress API call to get posts!!
var apiURL = 'https://yesler.com/wp-json/wp/v2/posts/?categories=10'

// This is where Vue() magic happens
var app = new Vue({
  el: "#app", // The target

  //------|
  // Data |
  //------|
  data: {
    // Post filters
    searchkeyword: '',
    selectauthor: '',
    selecttags: '',
    pageNum: 1,
    selectnumberofposts: 5,
    // Posts - Will pull from Wordpress API
    posts: null,
  }, // Data ends here

  // Wordpress Created 
  created: function() {
    this.fetchData()
  },

  // Update the api url if tags change
  watch: {
    selecttags: 'fetchData',
    selectnumberofposts: 'fetchData',
    pageNum: 'fetchData'
  },

  //---------|
  // Methods |
  //---------|
  // Fetch the Data from wordpress API
  methods: {
    fetchData: function() {
      var xhr = new XMLHttpRequest()
      var self = this
      // this.selecttags changes and updates the API call
      xhr.open('GET', apiURL +'&per_page='+this.selectnumberofposts+this.selecttags+'&page='+this.pageNum+'&_embed' )
      xhr.onload = function() {
        self.posts = JSON.parse(xhr.responseText)
        console.log(self.posts)
      }
      xhr.send()
    }
  },

  //------------------|
  // Computed Methods |
  //------------------|
  // Computed Methods: are a special type of methods that will run whenever any var inside it chagnes
  computed: {
    // Trying to work out lazy load of posts ... still needs some work
    // loadposts: function() {
    //   for (i=0; i > 5; i++){
    //     this.selectnumberofposts++;
    //   }
    // },
    filteredsearch: 
    function filteredsearch() {
      var _this = this;
      // filer() returns an array, filter((what) => { return the thing that includes the search keyword })
      var x = this.posts;
      // if there are posts: then filter
      if (x !== null) {
        //apiURL = 'https://yesler.com/wp-json/wp/v2/posts/?per_page=45&tags='+this.selecttags+'&_embed' 
        return x.filter(function (post) {
          // filter for posts that 1) if author matches author in drop down. 2) if search value matches title of post
          return post._embedded.author[0].name.includes(_this.selectauthor) && post.title.rendered.toLowerCase().includes(_this.searchkeyword.toLowerCase());
        });
      } else {
        // if error pull all posts
        return x;
      };
    }
  }

});