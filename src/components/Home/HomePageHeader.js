import "../../css/maincss.css"

function HomePageHeader(props) {
    var companyName = "Afifi's logistics"

    return (
        <>
        <div id="homepageheader-container">
            <div id="homepageheader-l">
                {companyName}
            </div>
            <div id="homepageheader-r">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Price Plans</a>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
        </div>
            
        </>
        
    )
  }

export default HomePageHeader;