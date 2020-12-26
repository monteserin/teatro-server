import PlaySchema from './schema';

export const createPlay = (name, userId) => {
    PlaySchema.create({
        name, userId
    });
}

export const getPlays = userId => PlaySchema.findAll({
    raw: true,
    where: {
        userId
    }
});

export const updatePlay = (id, data) => PlaySchema.update(data, { where: { id } });

export const deletePlay = id => PlaySchema.destroy({ where: { id } });