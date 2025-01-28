import {Routes, Route, Navigate} from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from './store/authContext';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sales from './components/Sales/Sales';
import FFC from './components/FFC/FFC';
import Delivery from './components/Delivery/Delivery';
import GardeningCalendar from './components/GardeningCalendar/GardeningCalendar';
import GardenResources from './components/GardenResources/GardenResources';
import GiftCard from './components/GiftCard/GiftCard';
import Radio from './components/Radio/Radio';
import Blog from './components/Blog/Blog';
import SingleBlog from './components/Blog/SingleBlog';
import Partners from './components/Partners/Partners';
import Aboutus from './components/Aboutuspage/Aboutus';
import Seminars from './components/Seminar/Seminars';
import Clubs from './components/Clubs/Clubs';
import Map from './components/Map/Map';
import ContactUs from './components/ContactUs/ContactUs';
import Brands from './components/Brands/Brands';
import WhyWorkHere from './components/WhyWorkHere/WhyWorkHere';
import AdminHome from './components/AdminPortal/AdminHome/AdminHome';
import NewBlogPost from './components/AdminPortal/BlogPosts/NewBlogPost/NewBlogPost';
import LoginPage from './components/AdminPortal/LoginPage/LoginPage'
import EditBlogMain from './components/AdminPortal/BlogPosts/EditBlogPost/Main/EditBlogMain';
import EditSalesMain from './components/AdminPortal/SalesPosts/EditSalesPost/Main/EditSalesMain';
import SingleBlogEdit from './components/AdminPortal/BlogPosts/EditBlogPost/SingleBlogEdit';
import NewSalesPost from './components/AdminPortal/SalesPosts/NewSalesPost/NewSalesPost';
import SingleEditSalesPost from './components/AdminPortal/SalesPosts/EditSalesPost/SingleEditSalesPost'
import NewGalleryImg from './components/AdminPortal/HomeGallery/NewGalleryImg';
import DeleteGalleryImg from './components/AdminPortal/HomeGallery/DeleteGalleryImg';
import NewGallery2Img from './components/AdminPortal/HomeGallery2/NewGallery2Img';
import DeleteGallery2Img from './components/AdminPortal/HomeGallery2/DeleteGallery2Img';
import PreviewPost from './components/AdminPortal/BlogPosts/PreviewPost/PreviewPost';
import SinglePreviewEdit from './components/AdminPortal/BlogPosts/PreviewPost/SinglePreviewEdit';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Videos from './components/Videos/Videos'
import SMS from './components/TermsandConditions/SMS';
import PrivacyPolicy from './components/TermsandConditions/PrivacyPolicy';
import PopUpForm from './components/AdminPortal/Popup/PopUpForm';
import Instagram from './components/Instagram/Instagram';
import FAQ from './components/Warranty/FAQ';
import NewPromotionsPost from './components/AdminPortal/PromotionsPosts/NewPromotionsPost/NewPromotionsPost';
import Promotions from './components/Promotions/Promotions';
import EditPromotionsPost from './components/AdminPortal/PromotionsPosts/EditPromotionsPost/EditPromotionsPost';
import ThingsweCarry from './components/ThingsweCarry/ThingsweCarry';
import Annuals from './components/ThingsweCarry/SubPages/Annuals/Annuals';
import Perennials from './components/ThingsweCarry/SubPages/Perennials/Perennials';
import Roses from './components/ThingsweCarry/SubPages/Roses/Roses';
import Trees from './components/ThingsweCarry/SubPages/Trees/Trees';
import Shrubs from './components/ThingsweCarry/SubPages/Shrubs/Shrubs';
import Xeric from './components/ThingsweCarry/SubPages/Xeric/Xeric';
import Hardgoods from './components/ThingsweCarry/SubPages/Hardgoods/Hardgoods';
import Shade from './components/ThingsweCarry/SubPages/Trees/Shade/Shade'
import Fruit from './components/ThingsweCarry/SubPages/Trees/Fruit/Fruit'
import Ornamental from './components/ThingsweCarry/SubPages/Trees/Ornamental/Ornamental'
import Conifer from './components/ThingsweCarry/SubPages/Trees/Conifer/Conifer'
import './App.css';

function App() {

  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Header />   
      <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/sales' element={<Sales />}/>
       <Route path='/ffc' element={<FFC />}/>
       <Route path='/delivery' element={<Delivery />}/>
       <Route path='/gardeningcalendar' element={<GardeningCalendar/>}/>
       <Route path='/gardenresources' element={<GardenResources/>}/>
       <Route path='/giftcard' element={<GiftCard />}/>
       <Route path='/radio' element={<Radio />}/>
       <Route path='/blog' element={<Blog />}/>
       {/* <Route path='/map'  element={<Map />}/> */}
       <Route path='/singleblog/:blogid' element={<SingleBlog />}/>
       <Route path='/partners' element={<Partners />}/>
       <Route path='/aboutus' element={<Aboutus />}/>
       <Route path='/seminars' element={<Seminars />}/>
       <Route path='/clubs' element={<Clubs />}/>
       <Route path='/contact' element={<ContactUs />}/>
       <Route path='/brands' element={<Brands />}/>
        <Route path='/thingswecarry' element={<ThingsweCarry />}/>
          <Route path='/annuals' element={<Annuals />}/>
          <Route path='/perennials' element={<Perennials />}/>
          <Route path='/roses' element={<Roses />}/>
          <Route path='/trees' element={<Trees />}/>
              <Route path='/shadetrees' element={<Shade />}/>
              <Route path='/ornamentaltrees' element={<Ornamental/>}/>
              <Route path='/fruittrees' element={<Fruit />}/>
              <Route path='/conifers' element={<Conifer />}/>
          <Route path='/shrubs' element={<Shrubs />}/>
          <Route path='/xeric' element={<Xeric />}/>
          <Route path='/hardgoods' element={<Hardgoods />}/>
        <Route path='/employment' element={<WhyWorkHere />}/>
       <Route path='/videos' element={<Videos />}/>
       <Route path='/promotions' element={<Promotions/>}/>
       <Route path='/instagram' element={<Instagram />}/>
       <Route path='/growersassurance' element={<FAQ />}/>
       <Route path='/smsterms' element={<SMS />}/>
       <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
       <Route path='/popupform' element={authCtx.token ? <PopUpForm /> : <Navigate to='/login'/>}/>
        <Route path='/adminhome' element={authCtx.token ? <AdminHome /> : <Navigate to='/login'/>}/>
        <Route path='/newblogpost' element={authCtx.token ? <NewBlogPost /> : <Navigate to='/login'/>}/>
        <Route path='/editpost' element={authCtx.token ? <EditBlogMain/> : <Navigate to='/login'/>}/>
        <Route path='/previewblog' element={authCtx.token ? <PreviewPost /> : <Navigate to='/login'/>}/>
        <Route path='/editpreview/:id' element={authCtx.token ? <SinglePreviewEdit /> : <Navigate to='/login'/>}/>
        <Route path='editpost/singleblogedit/:id' element={authCtx.token ? <SingleBlogEdit /> : <Navigate to='/login'/>}/>
        <Route path='/newsalespost' element={authCtx.token ? <NewSalesPost /> : <Navigate to='/login'/>}/>
        <Route path='/newgalleryimg' element={authCtx.token ? <NewGalleryImg /> : <Navigate to='/login'/>}/>
        <Route path='/deletegalleryimg' element={authCtx.token ? <DeleteGalleryImg/> : <Navigate to='/login'/>}/>
        <Route path='/newgallery2img' element={authCtx.token ? <NewGallery2Img /> : <Navigate to='/login'/>}/>
        <Route path='/deletegallery2img' element={authCtx.token ? <DeleteGallery2Img/> : <Navigate to='/login'/>}/>
        <Route path='/editsalespost' element={authCtx.token ? <EditSalesMain/> : <Navigate to='/login'/>}/>
        <Route path='editsalespost/singlesaleedit/:id' element={authCtx.token ? <SingleEditSalesPost /> : <Navigate to='/login'/>}/>
        <Route path='/newpromotionspost' element={authCtx.token ? <NewPromotionsPost /> : <Navigate to='/login'/>}/>
        <Route path='/deletepromotionspost' element={authCtx.token ? <EditPromotionsPost /> : <Navigate to='/login'/>}/>
        <Route path='/login' element={!authCtx.token ? <LoginPage /> : <Navigate to='/adminhome'/>} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
