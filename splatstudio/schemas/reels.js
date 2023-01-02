export default {
    name: 'reels',
    title: 'Reels',
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
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        title: 'Video URL',
        name: 'url',
        type: 'url'
      }
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  }
  