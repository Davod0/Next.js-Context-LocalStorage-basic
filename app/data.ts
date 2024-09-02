export interface Post {
  id: string;
  imageUrl: string;
  title: string;
  body: string;
}

export const mockedPosts: Post[] = [
  {
    id: "1",
    imageUrl:
      "https://images.pexels.com/photos/26741437/pexels-photo-26741437/free-photo-of-a-woman-in-a-white-dress-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Exploring the Mountains",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "2",
    imageUrl:
      "https://images.pexels.com/photos/27372391/pexels-photo-27372391/free-photo-of-a-person-standing-on-top-of-a-mountain-with-rocks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "A Day at the Beach",
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "3",
    imageUrl:
      "https://images.pexels.com/photos/21245316/pexels-photo-21245316/free-photo-of-potted-cactus-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "City Lights at Night",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "4",
    imageUrl:
      "https://images.pexels.com/photos/17683947/pexels-photo-17683947/free-photo-of-brunette-woman-in-white-blouse-and-black-maxi-skirt-leaning-on-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Forest Adventure",
    body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "5",
    imageUrl:
      "https://images.pexels.com/photos/27843966/pexels-photo-27843966/free-photo-of-a-woman-sitting-in-a-field-with-a-mirror.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "The Serenity of Nature",
    body: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
];
