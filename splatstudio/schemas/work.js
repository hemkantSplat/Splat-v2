export default {
    name: 'work',
    title: 'Work',
    type: 'document',
    fields: [
      {
        name:'order',
        title:'Order',
        type:"number",
        hidden:true,
      },
      {
        title: 'Serial Number',
        name: 'number',
        type: 'number'
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        title: 'Description',
        name: 'description',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
      {
        title: 'Video URL',
        name: 'url',
        type: 'url'
      },
  {
    title: 'tags',
    name: 'Tags',
    type: 'array',
    of: [{type: 'string'}],
    options: {
      layout: 'tags'
    }
  }
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  }
  