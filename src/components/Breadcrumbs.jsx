import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { matchPath, useLocation, useParams, useMatch, matchRoutes, Link } from 'react-router-dom';
import { routes } from '../helpers/routes';

function joinPaths(paths) {
	return paths.join('/').replace(/\/\/+/g, '/');
}

function matchRouteDefinitions(definitions, locationPathname, parentPath) {
	const crumbs = [];
	definitions.forEach((definition, index) => {
		if (definition.path) {
			const pathPatternWithParent = joinPaths([parentPath, definition.path]);

			const match = matchPath(
				{
					path: pathPatternWithParent,
					end: false
				}, locationPathname);
			if (match) {
				crumbs.push(match);
				if (definition.children) {
					const nestedMatches = matchRouteDefinitions(
						definition.children,
						locationPathname,
						pathPatternWithParent
					);
					crumbs.push(...nestedMatches);
				}
			}
		}
	});
	return crumbs;
}
const getBread = (pathRoutes, locationPathname, parentPath) => {
	const crumbs = [];
	pathRoutes.forEach((route, index) => {
		if (route.path) {
			const pathPattern = joinPaths([parentPath, route.path]);
			const isPath = locationPathname.match(pathPattern);
			if (isPath) {
				crumbs.push({
					path: route.path,
					name: route.name,
				});
				if (route.children) {
					const nestedMatches = getBread(route.children, locationPathname, pathPattern);
					crumbs.push(...nestedMatches);
				}
			}
		}
	})
	return crumbs;
}
const Breadcrumbs = () => {
	const location = useLocation();
	const breadcrumbs = getBread(routes, location.pathname, '/');
	return (
		<div className='mb-3'>
			{
				breadcrumbs.map((bread, index, { length }) => {
					return <span key={index} href={bread.path}>
						{index === 0 ? '' : ' > '}
						{index !== length - 1 ? (
							<Link to={bread.path}>{bread.name}</Link>
						) : (
							<>{bread.name}</>
						)}
					</span>
				})
			}
		</div>
	)
};
export default Breadcrumbs