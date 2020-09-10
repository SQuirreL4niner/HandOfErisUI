import rules from "./rbac-rules";

const check = (rules, role, action, data) => {
    const permissions = rules[role];

    if(!permissions) {
        //show basic components
        return false;
    }

    const staticPermissions = permissions.static;

    if(staticPermissions && staticPermissions.includes(action)) {
        //make some static rules for non auth
        return true;
    }

    const dynamicPermissions = permissions.dynamic;

    if(dynamicPermissions) {
        const permissionCondition = dynamicPermissions[action];

        if (!permissionCondition) {
            //make dynamic rules for actions
        }

        return permissionCondition(data);

    }

    return false;
};

const Can = props =>
    check(rules, props.role, props.perform, props.data)
        ? props.yes()
        : props.no();

Can.DefaultProps = {
    yes: () => null,
    no: () => null
};

export default Can;