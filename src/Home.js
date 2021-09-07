import React, { useEffect, useState } from 'react';
import './Home.css';
import banner from '../src/assets/banner.jpg';
import Product from './Product';
import MessageModal from './MessageModal';
import { useStateValue } from './StateProvider';
import { db } from './firebase';

function Home() {
  const [open, setOpen] = useState(false);
  const [{ user, wishlist }, dispatch] = useStateValue();
  // const [wishlist, setWishList] = useState([]);
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (user) {
      fetchWishlist();
    }
  }, [user]);

  const fetchWishlist = () => {
    db.collection('users')
      .doc(user?.uid)
      .collection('wishlist')
      .onSnapshot((snapshot) => {
        dispatch({
          type: 'UPDATE_WISHLIST',
          wishlist: snapshot.docs.map((doc) => doc.data()),
        });
      });
  };

  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={banner} alt="" />
        <div className="home__category">Jackets & Hoodies</div>
        <div className="home__row">
          <Product
            image="//lp2.hm.com/hmgoepprod?set=source[/c3/08/c308e8eae26682c548bf8be6608bf7dccffedd45.jpg],origin[dam],category[],type[LOOKBOOK],res[w],hmver[1]&call=url[file:/product/main]"
            title="Relaxed Fit Hoodie"
            info=" Hoodie in sweatshirt fabric made from a cotton blend."
            price={1499}
            id="123123"
            handleOpen={handleOpen}
            fetchWishlist={fetchWishlist}
          />
          <Product
            image="//lp2.hm.com/hmgoepprod?set=source[/c3/08/c308e8eae26682c548bf8be6608bf7dccffedd45.jpg],origin[dam],category[],type[LOOKBOOK],res[w],hmver[1]&call=url[file:/product/main]"
            title="Relaxed Fit Hoodie"
            info=" Hoodie in sweatshirt fabric made from a cotton blend."
            price={1499}
            id="98645"
            handleOpen={handleOpen}
            fetchWishlist={fetchWishlist}
          />
          <Product
            image="//lp2.hm.com/hmgoepprod?set=source[/c3/08/c308e8eae26682c548bf8be6608bf7dccffedd45.jpg],origin[dam],category[],type[LOOKBOOK],res[w],hmver[1]&call=url[file:/product/main]"
            title="Relaxed Fit Hoodie"
            info=" Hoodie in sweatshirt fabric made from a cotton blend."
            price={1499}
            id="89573"
            handleOpen={handleOpen}
            fetchWishlist={fetchWishlist}
          />
          <Product
            image="//lp2.hm.com/hmgoepprod?set=source[/c3/08/c308e8eae26682c548bf8be6608bf7dccffedd45.jpg],origin[dam],category[],type[LOOKBOOK],res[w],hmver[1]&call=url[file:/product/main]"
            title="Relaxed Fit Hoodie"
            info=" Hoodie in sweatshirt fabric made from a cotton blend."
            price={1499}
            id="243658"
            handleOpen={handleOpen}
            fetchWishlist={fetchWishlist}
          />
          <Product
            image="//lp2.hm.com/hmgoepprod?set=source[/c3/08/c308e8eae26682c548bf8be6608bf7dccffedd45.jpg],origin[dam],category[],type[LOOKBOOK],res[w],hmver[1]&call=url[file:/product/main]"
            title="Relaxed Fit Hoodie"
            info=" Hoodie in sweatshirt fabric made from a cotton blend."
            price={1499}
            id="42528"
            handleOpen={handleOpen}
            fetchWishlist={fetchWishlist}
          />
        </div>
        <div className="home__category">Trousers</div>
        <div className="home__row">
          <Product
            image="//lp2.hm.com/hmgoepprod?set=source[/41/e8/41e8b5d478b68098437b9511686213d46d0e00ce.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]"
            title="Relaxed Fit Hoodie"
            info=" Hoodie in sweatshirt fabric made from a cotton blend."
            price={1499}
            id="02345"
            handleOpen={handleOpen}
            fetchWishlist={fetchWishlist}
          />
          <Product
            image="//lp2.hm.com/hmgoepprod?set=source[/1f/e0/1fe0f78f8566f47cc65783668d9d9f1ffae26b43.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]"
            title="Relaxed Fit Hoodie"
            info=" Hoodie in sweatshirt fabric made from a cotton blend."
            price={1499}
            id="68653"
            handleOpen={handleOpen}
            fetchWishlist={fetchWishlist}
          />
          <Product
            image="//lp2.hm.com/hmgoepprod?set=source[/50/3c/503c6226f76df04826594f2c963a7bf798c3f6d5.jpg],origin[dam],category[men_trousers_trousers_regular_all],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]"
            title="Relaxed Fit Hoodie"
            info=" Hoodie in sweatshirt fabric made from a cotton blend."
            price={1499}
            id="431678"
            handleOpen={handleOpen}
            fetchWishlist={fetchWishlist}
          />
          <Product
            image="//lp2.hm.com/hmgoepprod?set=source[/d4/60/d4600576336768dcf64f7e6201a5690db119aa84.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]"
            title="Relaxed Fit Hoodie"
            info=" Hoodie in sweatshirt fabric made from a cotton blend."
            price={1499}
            id="74537"
            handleOpen={handleOpen}
            fetchWishlist={fetchWishlist}
          />
          <Product
            image="//lp2.hm.com/hmgoepprod?set=source[/6e/16/6e163ff4077a63fafaed6ae1e54ae79e0a137b72.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]"
            title="Relaxed Fit Hoodie"
            info=" Hoodie in sweatshirt fabric made from a cotton blend."
            price={1499}
            id="247888"
            handleOpen={handleOpen}
            fetchWishlist={fetchWishlist}
          />
        </div>
        <div className="home__category">Accessories</div>
        <div className="home__row">
          <Product
            image="//lp2.hm.com/hmgoepprod?set=source[/ff/3f/ff3f22d97172f4ec7a2e7ea0e3d7cb864c94e191.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]"
            title="Relaxed Fit Hoodie"
            info=" Hoodie in sweatshirt fabric made from a cotton blend."
            price={1499}
            id="792464"
            handleOpen={handleOpen}
            fetchWishlist={fetchWishlist}
          />
          <Product
            image="//lp2.hm.com/hmgoepprod?set=source[/1f/e2/1fe288918cacc289dd8d75ffb9aea3cadd74af67.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]"
            title="Relaxed Fit Hoodie"
            info=" Hoodie in sweatshirt fabric made from a cotton blend."
            price={1499}
            id="24638"
            handleOpen={handleOpen}
            fetchWishlist={fetchWishlist}
          />
          <Product
            image="//lp2.hm.com/hmgoepprod?set=source[/78/6b/786b7281b6d791e35c9660efe7188017fb6c7f16.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]"
            title="Relaxed Fit Hoodie"
            info=" Hoodie in sweatshirt fabric made from a cotton blend."
            price={1499}
            id="373445"
            handleOpen={handleOpen}
            fetchWishlist={fetchWishlist}
          />
          <Product
            image="https://lp2.hm.com/hmgoepprod?set=source[/89/13/8913cc48b6187466bc6f5d158caa051e43d48acd.jpg],origin[dam],category[ladies_accessories_hatscarvesgloves],type[DESCRIPTIVESTILLLIFE],res[z],hmver[3]&call=url[file:/product/main]"
            title="Relaxed Fit Hoodie"
            info=" Hoodie in sweatshirt fabric made from a cotton blend."
            price={1499}
            id="35798"
            handleOpen={handleOpen}
            fetchWishlist={fetchWishlist}
          />
          <Product
            image="//lp2.hm.com/hmgoepprod?set=source[/a3/dc/a3dc4e97f6489074e75687a79732289256959f69.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]"
            title="Cotton twill cap"
            info="Cap in cotton twill with an adjustable tab and metal fastener at the back"
            price={1499}
            id="773462"
            handleOpen={handleOpen}
            fetchWishlist={fetchWishlist}
          />
        </div>
        <MessageModal open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Home;
