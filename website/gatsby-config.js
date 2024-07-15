const path = require('path')

module.exports = {
  pathPrefix: "/algorithm-bootcamp",
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        name: 'Algorithm Bootcamp',
        siteUrl: 'https://fs5013-furi-sutao.github.io/algorithm-bootcamp/',
        description: 'アルゴリズムの基礎を身に付けるためのカリキュラム',
        baseDirectory: path.resolve(__dirname, '../'),
        author: 'Takada Riuji',
        sections: ['アルゴリズム', '01.イントロ', '02.アルゴリズムの制御構造', '03.順次構造', '04.分岐構造', '05.反復構造', '06.制御構造の組み合わせ', 'サイトについて'],
        navItems: [{ title: 'ホーム', url: '/home/' }],
        githubRepositoryURL: 'https://github.com/fs5013-furi-sutao/algorithm-bootcamp',
        carbonAdsURL:
          '//cdn.carbonads.com/carbon.js?serve=CE7IL2JN&placement=xstyleddev',
        docSearch: {
          appId: 'J2LYQ9877O',
          apiKey: '9295224c1474afa9f75f7d4772a1f713',
          indexName: 'smooth-doc',
        },
      },
    },
  ],
}
