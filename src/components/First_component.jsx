import React, {Component} from "react";
import axios from "axios";
axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';
const ArticleList = ({articles}) =>{
return(
    <>
    <ul>
        {articles.map(({objectID, url , title}) =>(
            <li key={objectID}>
                <a href={url}>
                    {title}
                </a>
            </li>
        ))}
    </ul>
    </>
)
}
export default class First_component extends Component{
    state = {
        articles: [],
        isLoading: false
    }
    async componentDidMount(){
        this.setState({
            isLoading: true
        })
        const response = await axios.get('/search?query=react')
        this.setState({
            articles: response.data.hits,
            isLoading: false
        })
    }
    render(){
        const {articles, isLoading} = this.state;
        return(
            <>
            <div>
            {isLoading ? <p>Loading</p> : <ArticleList articles={articles}/>}
            </div>
            </>
        )
    }
}
