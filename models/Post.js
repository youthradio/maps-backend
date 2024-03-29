var keystone = require('keystone');
var Types = keystone.Field.Types;

/*
Posts model
*/

var Post = new keystone.List('Post', {
	autokey: {
		path: 'slug',
		from: 'title',
		unique: true
	},
	map: {
		name: 'title'
	},
	sortable: true,
  label : 'Post',
  singular: 'Post',
  plural: 'Posts'
});

Post.add(
  {
    heading: 'Post Basic Info'
  },
  {
    title: { type: String, initial: true, default: '', required: true , label:'Post Title' ,},
    description: { type: Types.Markdown, wysiwyg: true, height: 200 , label:'Post Description',},
    postDate: { type: Types.Datetime, default: Date.now, label: 'Post event date (HH:MM:SS am/pm)'},
    location: {type: Types.Location, map: true, defaultCenter: { lat: 37.8068101, lng: -122.2698373 },height: 400, required: false, initial: false},
		category: { type: Types.Relationship, ref: 'Category', index: true, many: false, label:'Category',}
	},
  {
    heading: 'Contents'
  },
	{
		hasChapter: { type: Types.Boolean, label: 'Chapter Content' }
	},
	{
		heading: 'Chapter Content', dependsOn: { hasChapter: true }
	},
	{
    chapterContent: { type: Types.Markdown, wysiwyg: true, height: 200 , label:'Chapter Content', dependsOn: { hasChapter: true }}
	},
  {
    hasImage: { type: Types.Boolean, label: 'Image' }
  },
  {
    heading: 'Image', dependsOn: { hasImage: true }
  },
  {
    imageURL: {type: Types.Url, label: 'Image URL', dependsOn: { hasImage: true }},
    imageSource: {type: String, label: 'Image Source', dependsOn: { hasImage: true }},
    imageSourceURL: {type: Types.Url, label: 'Image Source URL', dependsOn: { hasImage: true }}
  },
  {
    hasInstagram: { type: Types.Boolean, label: 'Instagram' }
  },
  {
    heading: 'Instagram', dependsOn: { hasInstagram: true }
  },
  {
    instagramURL: {type: Types.Url, label: 'Instagram URL', dependsOn: { hasInstagram: true }},
    instagramEmbed: {type: Types.Html, height: 80, label: 'Instagram HTML Embed', dependsOn: { hasInstagram: true }}
  },
  {
    hasTwitter: { type: Types.Boolean, label: 'Twitter' }
  },
  {
    heading: 'Twitter', dependsOn: { hasTwitter: true }
  },
  {
    twitterURL: {type: Types.Url, label: 'Twitter URL',  dependsOn: { hasTwitter: true } },
    twitterEmbed: {type: Types.Html, height: 80, label: 'Twitter HTML Embed',  dependsOn: { hasTwitter: true } }
  },
  {
    hasAudio: { type: Types.Boolean, label: 'Audio' }
  },
  {
    heading: 'Audio', dependsOn: { hasAudio: true }
  },
  {
    audioURL: {type: Types.Url, label: 'Audio URL', dependsOn: { hasAudio: true }},
    audioEmbed: {type: Types.Html, height: 80, label: 'Audio HTML Embed', dependsOn: { hasAudio: true }}
  },
  {
    hasVideo: { type: Types.Boolean, label: 'Video' }
  },
  {
    heading: 'Video', dependsOn: { hasVideo: true }
  },
  {
    videoURL: {type: Types.Url, label: 'Video URL', dependsOn: { hasVideo: true }},
    videoEmbed: {type: Types.Html, height: 80, label: 'Video HTML Embed', dependsOn: { hasVideo: true }}
  },
  {
    heading: 'Review'
  },
  {
    isApproved: { type: Types.Boolean, label: 'Approved Post ?' }
  }
);

/**
 * Registration
 */
Post.defaultSort = "sortOrder";
Post.defaultColumns = "title, category, hasImage, hasTwitter, hasInstagram, hasAudio, hasVideo, isApproved";
Post.register();
