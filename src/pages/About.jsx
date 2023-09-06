import { Container } from "react-bootstrap"

const AboutPage = ()=>{
    return (
      <Container>
        <h1 className="title">Abut</h1>
        <h1 className="subtitle"> Welcome to the restaurant The meats!</h1>
        <p className="phome">
          <p className="pAbuot">Login:</p> You can register on the site for
          maximum use of the site service You can log in and register on the
          dedicated pages in the nav bar. The details will be saved in the data
          as well as uploaded locally. that will appear on the home page (if
          any), It is not possible to connect independently to the admin, but
          only the site administrator will be able to update it with the date.
          Are you done and don't want the account to remain open? By clicking on
          the logout, you do not exit the personal account.
        </p>
        <p className="phome">
          <p className="pAbuot">Menu:</p> The menu appears in 2 views for
          convenience the user. It is also possible to sort by categories or
          search in the search field that appears In Nav Bar a user who is not
          logged in will be able to view the menu but will not be able to order.
          user Connected will be able to order only after filling out an order
          form or a table order after filling out The user form will be
          transferred to a menu page where you can choose the desired amount per
          dish and order, Clicking on the end of the order will open a popup if
          the summary of the order, the price to be paid, and an option To
          proceed to payment on the payment page, it will be possible to insert
          a credit card. Only after approval Payment The order will go to the
          kitchen for work. At any time you can enter my orders through the Nav
          You can view the orders we have made and by clicking on a specific
          order you can see its details The order and order status. An admin
          type user can through the nav bar enter the menu there Can edit and
          delete products as well as can add new products by clicking on the +
          icon
        </p>
        <p className="phome">
          <p className="pAbuot">Get in touch:</p> on this page you can fill out
          a contact form, a logged in user can also Open a recommendation page
          and recommend us:) The recommendations will be saved and displayed
          with the profile picture of The home page user.
        </p>
        <p className="phome">
          <p className="pAbuot">Profile picture: </p>clicking on the profile
          picture will open a page The profile in which the user can change his
          personal information by clicking OK will be saved The new details and
          the picture will change in Nav Bar and in the recommendations.
        </p>
        <p className="phome">
          <p className="pAbuot"> crm:</p> an admin user will also be able to log
          in to the crm page to view all the order forms.
        </p>
        <p className="phome">
          <p className="pAbuot">footer:</p> at the bottom of each page appears
          the footer with the restaurant's logo and contact information in an
          experiential and convenient way for the user. Clicking on the icons
          will open the following:
          <br></br>
          1. Clock - inscription if the restaurant is open or closed.
          <br></br>
          2. Location - Google resets if the website address.
          <br></br>
          3.Whatsapp -Switch to WhatsApp if you enter the restaurant's phone
          number.
          <br></br>
          4. Email- go to the gmail window if the recipient of the restaurant's
          email.
        </p>
        <p className="pAbuot"></p>
        <p className="phome">
          The site is responsive and fully adapted to use all types of media. A
          lot of time and effort was invested in creating an experiential and
          fun site. You are welcome to try it out We will be happy to give an
          opinion for any streamlining and improvement and also for patrons :)
        </p>
      </Container>
    );
}
export default AboutPage