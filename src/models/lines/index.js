import Schema from './schema';

export const create = (txt, playId) => {
    Schema.create({
        txt, playId
    });
}

export const getByUserId = userId => Schema.findAll({
    raw: true,
    where: {
        userId
    }
});

export const getByPlayId = playId => Schema.findAll({
    raw: true,
    where: {
        playId
    }
});

export const update = (txt, order, lineId) => {
    return Schema.update({ txt }, { where: { id: lineId } })
}


export const remove = (lineId) => {
    return Schema.destroy({ where: { id: lineId } })
}

