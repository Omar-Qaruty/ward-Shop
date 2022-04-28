import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHvV0erfs1uJTWZdu0QaybxVVdQ2O_JDdBAw&usqp=CAU',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i2-prod.mirror.co.uk/incoming/article13164070.ece/ALTERNATES/s1200d/0_Joey-Trbbiani-Matt-Le-Blanc.jpg',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.pinimg.com/474x/2e/c5/50/2ec550965aef0fdac2a63ce4710a1fd5--weird-shoes-crazy-shoes.jpg',
    },
    {
      id: 4,
      title: 'women',
      imageUrl: 'https://eb8e7f6d53.nxcli.net/wp-content/uploads/2019/02/fashion_trends_are_strange_nowadays_640_18.jpg',
    },
    {
      id: 5,
      title: 'men',
      imageUrl: 'https://icraftgifts.com/files/blog_compiled_photos/733/blog_compiled_photos_detail_e064a6c771db6b57304b953e03a3a279.jpg',
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
