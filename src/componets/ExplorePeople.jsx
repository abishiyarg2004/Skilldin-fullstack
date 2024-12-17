import React, { useState } from 'react';
import './ExplorePeople.css';

const ExplorePeople = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      id: 1,
      name: "Lori Eckhart",
      skill: "Painting",
      imageUrl: "https://image.winudf.com/v2/image1/bmV0LndsbHBwci5rYXdhaWlfZ2lybF9wcm9maWxlX3BpY3R1cmVzX3NjcmVlbl8yXzE2NjYyNDQxNDNfMDQy/screen-2.jpg?fakeurl=1&type=.jpg",
      posts: [
        { id: 101, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlkcTmxSmWlYnJtn2kD5fL4d-9o0KMwCnfA2KJR4Rf6gaOKOR3do5otV6iWG9hIsq8yws&usqp=CAU", description: "Beautiful sunset painting.", likes: 120 },
        { id: 101, imageUrl: "https://m.media-amazon.com/images/I/71b3QfcD2wL.jpg", likes: 120 },
        { id: 101, imageUrl: "https://i.etsystatic.com/40021641/r/il/cd0da5/4523224854/il_570xN.4523224854_34h7.jpg", likes: 120 },
        { id: 102, imageUrl: "https://img.freepik.com/premium-photo/colorful-painting-lake-with-sunrise-forest-scene-background_789916-1218.jpg", description: "Acrylic painting on canvas.", likes: 80 }
      ],
    },
    {
      id: 2,
      name: "Intend Better",
      skill: "Graphic Design",
      imageUrl: "https://media.istockphoto.com/id/1295120027/photo/studio-portrait-of-18-year-old-woman-with-brown-hair.jpg?s=612x612&w=0&k=20&c=F2meyiPww_14TgJpKeOnLmA45hgzCn2pIPShhHDPUWM=",
      posts: [
        { id: 201, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtLoJmv6c_zyeH25zH2i1EuBugrCZE62dMQ&s", description: "Beautiful nature photography.", likes: 200 },
        { id: 202, imageUrl: "https://img.freepik.com/free-vector/flat-world-graphics-day-illustration_23-2148880103.jpg?size=338&ext=jpg&ga=GA1.1.1887574231.1729209600&semt=ais_hybrid", likes: 200 },
        { id: 203, imageUrl: "https://miro.medium.com/v2/resize:fit:1000/0*tkOjLUG81W3nICMS.jpg", likes: 200 },
        { id: 204, imageUrl: "https://cdn.colorexpertsbd.com/wp-content/uploads/2023/12/Art-and-Illustration-for-Graphic-Design-Example-3.webp", description: "Urban photography.", likes: 90 }
      ],
    },
    {
      id: 3,
      name: "Shasta Marina",
      skill: "Photography",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s",
      posts: [
        { id: 301, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtLoJmv6c_zyeH25zH2i1EuBugrCZE62dMQ&s", description: "Beautiful nature photography.", likes: 200 },
        { id: 302, imageUrl: "https://img.freepik.com/free-vector/flat-world-graphics-day-illustration_23-2148880103.jpg?size=338&ext=jpg&ga=GA1.1.1887574231.1729209600&semt=ais_hybrid", likes: 200 },
        { id: 303, imageUrl: "https://miro.medium.com/v2/resize:fit:1000/0*tkOjLUG81W3nICMS.jpg", likes: 200 },
        { id: 304, imageUrl: "https://cdn.colorexpertsbd.com/wp-content/uploads/2023/12/Art-and-Illustration-for-Graphic-Design-Example-3.webp", description: "Urban photography.", likes: 90 }
      ],
    },
    {
      id: 4,
      name: "Mira Bennett",
      skill: "Yoga",
      imageUrl: "https://www.healthifyme.com/blog/wp-content/uploads/2021/07/Types-of-Yoga-1.jpg",
      posts: [
        { id: 401, imageUrl: "https://www.dabur.com/Blogs/Doshas/Importance%20and%20Benefits%20of%20Yoga%201020x450.jpg", description: "Morning yoga routine.", likes: 180 },
        { id: 401, imageUrl: "https://www.sleepfoundation.org/wp-content/uploads/2021/01/yoga-outside.jpg", description: "Morning yoga routine.", likes: 180 },
        { id: 401, imageUrl: "https://www.auromere.com/images/Yoga-Pastel-Sun.jpg", description: "Morning yoga routine.", likes: 180 },
        { id: 402, imageUrl: "https://geopelie.com/cdn/shop/articles/jeune_femme_dans_une_posture_de_yoga_d_equilibre.jpg?v=1651737069", description: "Advanced yoga poses.", likes: 220 },
      ],
    },
    {
      id: 5,
      name: "Finn Cross",
      skill: "Gardening",
      imageUrl: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=",
      posts: [
        { id: 501, imageUrl: "https://www.marthastewart.com/thmb/AIL-k7ji-9r_L_m6im0GuNHkSuY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/garden-glossary-potting-getty-0623-ecf762deed2a43bca2a90183cb03da31.jpg", description: "Rose garden in full bloom.", likes: 300 },
        { id: 501, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2qj4sc9BM9y86S0TP33z0hC9Kp4GZxKqoFJZxQ9RyJcirhqpVnThv0Rh246veJfBmfno&usqp=CAU", likes: 300 },
        { id: 502, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCE2HPe3fi0sChatP_OrytEnbFlTIEjkfN4IhWAIautMMKmfW1PSgUU86ivWKYIJaP33E&usqp=CAU", description: "DIY vertical garden.", likes: 250 },
      ],
    },
    {
      id: 6,
      name: "Zara Woods",
      skill: "Sculpting",
      imageUrl: "https://www.georgettesart.com/wp-content/uploads/2022/02/Helen-pottery-Bisbane-clay-art-classes--768x1024.jpeg",
      posts: [
        { id: 601, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_BDKuAVKtg4skss_zZqCyV9BEbeyQGZfu8EezPkTX7Mi1NJ4Bt4oXGUxadQH8l4LDknw&usqp=CAU", description: "Clay sculpture of a human figure.", likes: 110 },
        { id: 601, imageUrl: "https://i.pinimg.com/474x/2c/c4/0a/2cc40a10a2b14ce51556bb707af7770e.jpg", description: "Clay sculpture of a human figure.", likes: 110 },
        { id: 601, imageUrl: "https://i.pinimg.com/736x/6f/ea/9d/6fea9d6b41db057d294161f5cc52dc1c.jpg", description: "Clay sculpture of a human figure.", likes: 110 },
        { id: 602, imageUrl: "https://i.pinimg.com/564x/47/eb/c3/47ebc34d967c082a4f971e0cf1884d8b.jpg", description: "Abstract metal sculpture.", likes: 160 },
      ],
    },
    {
      id: 7,
      name: "Oliver Green",
      skill: "Cooking",
      imageUrl: "https://media.istockphoto.com/id/1267173093/photo/woman-mixing-ingredients-and-vegetables-in-pan-while-preparing-lunch.jpg?s=612x612&w=0&k=20&c=JvA2vsFF7feEYvHnr79FNvZq1hEd1-evnUniaVwMCZg=",
      posts: [
        { id: 701, imageUrl: "https://via.placeholder.com/150", description: "Gourmet pasta dish.", likes: 350 },
        { id: 702, imageUrl: "https://via.placeholder.com/150", description: "Homemade sourdough bread.", likes: 220 },
      ],
    },
    {
      id: 8,
      name: "Sofia Reed",
      skill: "Music Composition",
      imageUrl: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      posts: [
        { id: 801, imageUrl: "https://media.istockphoto.com/id/1477430966/photo/woman-preparing-quinoa-vegetable-mix-cooked-in-a-frying-pan.webp?b=1&s=612x612&w=0&k=20&c=0qIRLTSMD7k_Gg7nm8W_py5V3QW2SLEhshxus0SL7cQ=", description: "Classical piano composition.", likes: 410 },
        { id: 802, imageUrl: "https://st4.depositphotos.com/12982378/23305/i/450/depositphotos_233052996-stock-photo-cropped-image-mature-woman-frying.jpg", description: "Original soundtrack for a short film.", likes: 380 },
      ],
    },
    {
      id: 9,
      name: "Aria Ray",
      skill: "Dancing",
      imageUrl: "https://images.unsplash.com/photo-1547153760-18fc86324498?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZXJuJTIwZGFuY2V8ZW58MHx8MHx8fDA%3D",
      posts: [
        { id: 901, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwNWTSJl8eCMN5LdfeHqGKw1b6FJrR_JSQrO6D663mYHdiJG74STy3e05nGUhSWIc5Dg0&usqp=CAU", description: "Ballet performance.", likes: 500 },
        { id: 901, imageUrl: "https://img.freepik.com/free-photo/dynamic-portrait-young-man-woman-dancing-hiphop-isolated-black-background-with-mixed-lights-effect_155003-46269.jpg", description: "Ballet performance.", likes: 500 },
        { id: 902, imageUrl: "https://images.squarespace-cdn.com/content/v1/64949dc79977705a91fbda77/4bd39523-9ec3-4112-9ab3-57c92fdf75e4/U+of+U+Fall+Dance+2+2021+1180+edit.jpg", description: "Contemporary dance routine.", likes: 450 },
      ],
    },
    {
      id: 10,
      name: "Elliot Blake",
      skill: "Calligraphy",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5kPFdLEc5mM2JRu7x1bJ6ic-RkVZKUOkOhw&s",
      posts: [
        { id: 1001, imageUrl: "https://via.placeholder.com/150", description: "Calligraphy wedding invitation.", likes: 200 },
        { id: 1002, imageUrl: "https://via.placeholder.com/150", description: "Modern calligraphy for a quote.", likes: 240 },
      ],
    },
    {
      id: 11,
      name: "Mia Harper",
      skill: "Woodworking",
      imageUrl: "https://media.istockphoto.com/id/1305462732/photo/headshot-studio-portrait-of-a-woman-in-profile-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=T0R-pAmJJpErWc8hE0jSJnmptUFQ5MvtPX7NPJJln9s=",
      posts: [
        { id: 1101, imageUrl: "https://via.placeholder.com/150", description: "Handmade wooden coffee table.", likes: 300 },
        { id: 1102, imageUrl: "https://via.placeholder.com/150", description: "Wood carving of an animal.", likes: 280 },
      ],
    },
    {
      id: 12,
      name: "Lucas Foster",
      skill: "Pottery",
      imageUrl: "https://thumbs.dreamstime.com/b/profile-picture-selfie-business-woman-office-break-social-media-online-post-update-happy-professional-323969562.jpg",
      posts: [
        { id: 1201, imageUrl: "https://via.placeholder.com/150", description: "Handcrafted ceramic vase.", likes: 350 },
        { id: 1202, imageUrl: "https://via.placeholder.com/150", description: "Wheel-thrown bowl.", likes: 290 },
      ],
    },
    {
      id: 13,
      name: "Emma Collins",
      skill: "Knitting",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJviVlsiXc-LHXsX7hfhnWbz3a-ndvBib4supXpGXTGzXzlvEJpNpVTC11Xdf4L2pnjvg&usqp=CAU",
      posts: [
        { id: 1301, imageUrl: "https://via.placeholder.com/150", description: "Hand-knitted scarf.", likes: 130 },
        { id: 1302, imageUrl: "https://via.placeholder.com/150", description: "Knitted sweater for winter.", likes: 160 },
      ],
    },
    {
      id: 14,
      name: "Leo Carter",
      skill: "Tattoo Art",
      imageUrl: "https://png.pngtree.com/png-clipart/20230820/ourmid/pngtree-cute-profile-png-image_9188601.png",
      posts: [
        { id: 1401, imageUrl: "https://via.placeholder.com/150", description: "Intricate sleeve tattoo.", likes: 400 },
        { id: 1402, imageUrl: "https://via.placeholder.com/150", description: "Minimalist tattoo design.", likes: 350 },
      ],
    },
    {
      id: 15,
      name: "Ella Jones",
      skill: "Singing",
      imageUrl: "https://static2.bigstockphoto.com/5/4/2/large1500/245318167.jpg",
      posts: [
        { id: 1501, imageUrl: "https://via.placeholder.com/150", description: "Cover of a popular song.", likes: 500 },
        { id: 1502, imageUrl: "https://via.placeholder.com/150", description: "Original vocal performance.", likes: 480 },
      ],
    },
    {
      id: 16,
      name: "Noah Clark",
      skill: "Baking",
      imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-is-wearing-glasses-in-silhouette-on-a-dark-background-image_2886069.jpg",
      posts: [
        { id: 1601, imageUrl: "https://via.placeholder.com/150", description: "Decorated birthday cake.", likes: 300 },
        { id: 1602, imageUrl: "https://via.placeholder.com/150", description: "Chocolate chip cookies.", likes: 290 },
      ],
    },
    {
      id: 17,
      name: "Ava Martin",
      skill: "Flower Arrangement",
      imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-cartoon-image-of-a-boy-with-glasses-image_2905666.jpg",
      posts: [
        { id: 1701, imageUrl: "https://via.placeholder.com/150", description: "Bridal bouquet.", likes: 400 },
        { id: 1702, imageUrl: "https://via.placeholder.com/150", description: "Table centerpieces for an event.", likes: 350 },
      ],
    },
    {
      id: 18,
      name: "Benjamin White",
      skill: "Origami",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_9lUvoVyqhrAT_d8gOCUEohBo4MICN2qFzPX_zAc2Sz-sxtTB8QNYkC8XpIhZK9sZr4&usqp=CAU",
      posts: [
        { id: 1801, imageUrl: "https://via.placeholder.com/150", description: "Origami crane.", likes: 220 },
        { id: 1802, imageUrl: "https://via.placeholder.com/150", description: "Complex geometric origami.", likes: 200 },
      ],
    },
    {
      id: 19,
      name: "Amelia Roberts",
      skill: "Fashion Design",
      imageUrl: "https://www.shutterstock.com/image-photo/serious-pretty-boy-head-shot-600nw-2111421392.jpg",
      posts: [
        { id: 1901, imageUrl: "https://via.placeholder.com/150", description: "Handmade evening gown.", likes: 420 },
        { id: 1902, imageUrl: "https://via.placeholder.com/150", description: "Sustainable fabric fashion design.", likes: 380 },
      ],
    },
    {
      id: 20,
      name: "Daniel Scott",
      skill: "Candle Making",
      imageUrl: "https://media.istockphoto.com/id/1027191326/photo/portrait-of-a-10-years-old-pretty-girl-child-teenager-face-hair-beauty-fun-eyes-freckles.jpg?b=1&s=612x612&w=0&k=20&c=k39DkLW0o-MH0INkPg4UVvdMq87kHUP6tqhuLcqqv-Q=",
      posts: [
        { id: 2001, imageUrl: "https://via.placeholder.com/150", description: "Hand-poured scented candles.", likes: 210 },
        { id: 2002, imageUrl: "https://via.placeholder.com/150", description: "Soy candles with essential oils.", likes: 190 },
      ],
    },
  ];
  

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="explore-people-page">
      {selectedUser ? (
        <div className="user-details-page">
          <div className="blurred-background">
            <div className="user-profile">
              {/* Display the selected user's image */}
              <img className="profile-image" src={selectedUser.imageUrl} alt={selectedUser.name} />
              <h2>{selectedUser.name}</h2>
              <p style={{color:'black'}}> Skill: {selectedUser.skill}</p>
              <h4 style={{color:'black'}}>Posts</h4>
              <div className="user-posts-grid">
                {selectedUser.posts.map(post => (
                  <div key={post.id} className="user-post">
                    <img src={post.imageUrl} alt="User post" />
                    <p style={{color:'black'}}> {post.description}</p>
                    <p>Likes: {post.likes}</p>
                  </div>
                ))}
              </div>
              <button className="back-button" onClick={() => setSelectedUser(null)}>Go Back</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="people-grid">
          {users.map(user => (
            <div key={user.id} className="user-card" onClick={() => handleUserClick(user)}>
              <img src={user.imageUrl} alt={user.name} />
              <h3 style={{color:'black'}}>{user.name}</h3>
              <p style={{color:'black'}}>{user.skill}</p>
              <button>Follow</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExplorePeople;
