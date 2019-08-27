const _serializeSingle = (prop) => {
  return {
    'id': prop.id,
    'name': prop.name,
    'dob': prop.dob,
    'bio': prop.bio,
    'theme': prop.theme,
    'avatar': prop.avatar
  };
};

const serializer = (data) => {
  if (!data) {
    return null
  }
  if (Array.isArray(data)) {
    return data.map(_serializeSingle)
  }
  return _serializeSingle(data)
}

module.exports = serializer