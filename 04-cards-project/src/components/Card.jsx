import { Bookmark } from 'lucide-react';
export const Card = () => {
  return (
     <div className="card">
          <div className="top">
            <img src="https://tse3.mm.bing.net/th/id/OIP.YKFZjzosPzcUtBNHe9cAdAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            <button>Save <Bookmark size={16} /></button>
          </div>
          <div className="center">
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
            <div className='tag'>
              <h4>part time</h4>
              <h4>senior level</h4>
            </div>
          </div>
          <div className="bottom">
                <div className='cash'>
                  <h3>$120</h3>
                  <p>Mumbai, India</p>
                </div>
                <button>Apply Now</button>
          </div>
        </div>
  )
}
