const TechInfo = ({ name, rocket, isEngine }) => {
    const header = name.toUpperCase();
    const firstRow = {
        title: isEngine ? 'NUMBER' : 'HEIGHT',
        value: isEngine ? rocket.engines.number : rocket.height.meters + '/m ' + rocket.height.feet + '/ft',
    };
    const secondRow = {
        title: isEngine ? 'PROPELANT 1' : 'DIAMETER',
        value: isEngine ? rocket.engines.propellant_1 : rocket.diameter.meters + '/m ' + rocket.diameter.feet + '/ft',
    };
    const thirdRow = {
        title: isEngine ? 'PROPELANT 2' : 'STAGES',
        value: isEngine ? rocket.engines.propellant_2 : rocket.stages,
    };
    const fourthRow = {
        title: isEngine ? 'THRUST TO WEIGHT' : 'COST PER LAUNCH',
        value: isEngine ? rocket.engines.thrust_to_weight : `$${rocket.cost_per_launch.toLocaleString()}.00`,
    };

    const body = [firstRow, secondRow, thirdRow, fourthRow];

    const img = `../assets/${name.replace(/\s+/g, '').toLowerCase()}.png`;

    return {
        header,
        body,
        img,
    };
};

export default TechInfo;
