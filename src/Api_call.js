import React,{Component} from 'react';

class Api_call extends Component{
	constructor(props){
		super(props);
		this.state ={
			items:[],
		}
	}
	componentDidMount () {
	const proxcy ='https://cors-anywhere.herokuapp.com/';
	const url ='https://jsonkeeper.com/b/356L'
			fetch(proxcy + url)
			.then(res=> res.json())
			.then(
				(result) => {
					this.setState({
						items:result.data.purchased_services
					})
			})
		}

	render (){
		 const { items } = this.state;
		 console.log(items)
		return(
				<>
				<div className="container">
				{
					items.map((val)=>{
						return <>
							<h4>Main Service {val.id}</h4>
						<div className="bg-secondary p-3">
							<div className="card mt-3 pl-4 py-4">
								<h5>Sub-Service {val.purchased_office_template.purchased_office_services[0].id}</h5>				
								<div className="d-flex">
								<img src={val.purchased_office_template.purchased_office_services[0].image} className="" style={{width:"75px"}}></img>				
								<p className="ml-5">{val.purchased_office_template.purchased_office_services[0].description}</p>				
								<h5 className="mr-5">{val.purchased_office_template.purchased_office_services[0].price}</h5>				
								</div>
							</div>
							{val.purchased_office_template.purchased_office_services[1] &&<div className="card mt-3 pl-4 py-4">
								 <h5>Sub-Service { val.purchased_office_template.purchased_office_services[1].id}</h5>
								 <div className="d-flex">
									<img src={val.purchased_office_template.purchased_office_services[1].image} style={{width:"75px"}}></img>
									<p className="ml-5">{ val.purchased_office_template.purchased_office_services[1].description}</p>
									<h5 className="mr-5">{ val.purchased_office_template.purchased_office_services[1].price}</h5>
								</div>
							</div>}
							{val.purchased_office_template.purchased_office_services[2] && <div className="card mt-3 pl-4 py-4">
								<h5>Sub-Service{ val.purchased_office_template.purchased_office_services[2].id}</h5>
								<div className="d-flex">
									<img src={ val.purchased_office_template.purchased_office_services[2].image} style={{width:"75px"}}></img>
									<p className="ml-5">{ val.purchased_office_template.purchased_office_services[2].description}</p>
									<h5 className="mr-5">{val.purchased_office_template.purchased_office_services[2].price}</h5>
								</div>
							</div>}
						</div> 
						</>
					})
				}
				</div>
				</>
			);
	}
}
export default Api_call ; 