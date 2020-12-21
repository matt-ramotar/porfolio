export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe106ded689bc008dbd4311',
                  title: 'Sanity Studio',
                  name: 'porfolio-studio',
                  apiId: 'ffd02934-b0e8-4df7-a0b1-c98d5b4f919a'
                },
                {
                  buildHookId: '5fe106de4702870128f5fbcf',
                  title: 'Portfolio Website',
                  name: 'porfolio-web',
                  apiId: '3249dded-7ae4-428d-9407-157cb5888b61'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matt-ramotar/porfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://porfolio-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
