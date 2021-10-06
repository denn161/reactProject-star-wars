
/**
 * Функция для получения значения из локального хранилища
 * @param {String} key Ключ
 */

export const getLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    if (data !== null) {
        return JSON.parse(data);
    }
    return {};    
}

/**
 * Функция устанавливает ключ и значение в локальное хранилище
 * @param {Number} key Ключ
 * @param {Number} data Значение
 */
export const setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}