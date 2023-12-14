import {Link} from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1>MBTI별 좋아하는 컬러</h1>
            <div>
                <Link to='/new'></Link>
            </div>
        </div>
    )
}
export default Home;