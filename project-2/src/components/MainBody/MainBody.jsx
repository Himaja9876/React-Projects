import styles from "./MainBody.module.css"

const MainBody = () => {
  return (
    <div>
      <div>
        <div className={styles.heading}>
          <h1>CONTACT US</h1>
        </div>
        <p>
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>

      <div className={styles.mainpage}>
      <div>
        
        <div className={styles.support}>
          
          <div className={styles.support_buttons}>
            <button>VIA SUPPORT CHAT</button>
            <button>VIA CALL</button>
          </div>
          
          <div className={styles.email}>
          <button>VIA EMAIL FORM</button>
          </div>

        </div>
      
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name"/>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email"/>
          <label htmlFor="text">Email</label>
          <input type="text" id="text" name="text"/>
          <button>SUBMIT</button>
        </div>
      </div>
      
      <img src="images/Service 24_7-pana 1" alt="24/7 Support"/>

      </div>
      
    </div>
  )
}

export default MainBody