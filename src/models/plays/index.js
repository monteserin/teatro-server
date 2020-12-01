import PlaySchema from './schema';

export const createPlay = (name) => PlaySchema.create({
    name
});

export const updatePlay = (id, data) => PlaySchema.update(data, { where: { id } });

export const deletePlay = id => UserSchema.destroy({ where: { id } });