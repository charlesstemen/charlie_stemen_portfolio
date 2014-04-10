services.factory('ProjectService', ['$q', function($q){
	var _projects = [
		{
			id: 1,
			title: 'HG Skis 2015',
			mainImg: 'images/projects/hg-skis-2015/logo&marks.jpg',
			categories: [
				'graphic-design',
				'photography',
				'video'
			],
			description: '<p>2015 rebrand for this craft ski company that embraces the surrounding youth "park" skiing culture.  My design solutions focused on creating a connection between where the companies roots began, taking inspiration from everything for the vermont state flag, to Sugarbush Resort.</p><ul class="plain"><li><a href="#">hgskis.com</a></li><li><a href="#">vimeo.com/hgskis</a></li><li><a href="#">facebook.com/hgskis</a></li><li><a href="#">instagram.com/hgskis</a></li></ul>',
			sections: [
				{
					title: 'Logo & Marks',
					assets: [
						'images/projects/hg-skis-2015/logo&marks.jpg',
						'images/projects/hg-skis-2015/logo&marks2.jpg'
					]
				},
				{
					title: 'Retail Lookbook',
					assets: [
						'images/projects/hg-skis-2015/catalog.jpg',
						'images/projects/hg-skis-2015/catalog2.jpg',
						'images/projects/hg-skis-2015/catalog3.jpg'
					]
				}
			]
		},
		{
			id: 2,
			title: 'Test 1',
			mainImg: 'images/projects/hg-skis-2015/catalog.jpg',
			categories: [
				'graphic-design',
				'video'
			],
			description: '<p>2015 rebrand for this craft ski company that embraces the surrounding youth "park" skiing culture.  My design solutions focused on creating a connection between where the companies roots began, taking inspiration from everything for the vermont state flag, to Sugarbush Resort.</p><ul class="plain"><li><a href="#">hgskis.com</a></li><li><a href="#">vimeo.com/hgskis</a></li><li><a href="#">facebook.com/hgskis</a></li><li><a href="#">instagram.com/hgskis</a></li></ul>',
			sections: [
				{
					title: 'Logo & Marks',
					assets: [
						'images/projects/hg-skis-2015/logo&marks.jpg',
						'images/projects/hg-skis-2015/logo&marks2.jpg'
					]
				},
				{
					title: 'Retail Lookbook',
					assets: [
						'images/projects/hg-skis-2015/catalog.jpg',
						'images/projects/hg-skis-2015/catalog2.jpg',
						'images/projects/hg-skis-2015/catalog3.jpg'
					]
				}
			]
		},
		{
			id: 3,
			title: 'Test 2',
			mainImg: 'images/projects/hg-skis-2015/catalog3.jpg',
			categories: [
				'video'
			],
			description: '<p>2015 rebrand for this craft ski company that embraces the surrounding youth "park" skiing culture.  My design solutions focused on creating a connection between where the companies roots began, taking inspiration from everything for the vermont state flag, to Sugarbush Resort.</p><ul class="plain"><li><a href="#">hgskis.com</a></li><li><a href="#">vimeo.com/hgskis</a></li><li><a href="#">facebook.com/hgskis</a></li><li><a href="#">instagram.com/hgskis</a></li></ul>',
			sections: [
				{
					title: 'Logo & Marks',
					assets: [
						'images/projects/hg-skis-2015/logo&marks.jpg',
						'images/projects/hg-skis-2015/logo&marks2.jpg'
					]
				},
				{
					title: 'Retail Lookbook',
					assets: [
						'images/projects/hg-skis-2015/catalog.jpg',
						'images/projects/hg-skis-2015/catalog2.jpg',
						'images/projects/hg-skis-2015/catalog3.jpg'
					]
				}
			]
		}
	];

	var _getAllProjects = function(){
		return _projects;
	}

	var _getProjectById = function(projectId){
		var found = null;
		$.each(_projects, function(index, item){
			if(item.id == projectId){
				found = item;
			}
		});
		return found;
	}

	return {
		getAllProjects: _getAllProjects,
		getProjectById: _getProjectById
	}
}]);