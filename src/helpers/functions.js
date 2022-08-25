import { useLocation, useNavigate, useParams } from "react-router-dom";

export const filterItems = (products, quantity) => {
  products?.sort((a, b) => b.rating.rate - a.rating.rate).splice(0, quantity);
};

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
