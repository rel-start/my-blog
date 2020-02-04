const idCounters = {};

export default function getUID(name) {
  if (!name) {
    throw Error('参数 "name" 在getUID() 中是必需的');
  }

  if (!idCounters[name]) {
    idCounters[name] = 0;
  }
  return name + String(idCounters[name]++);
}