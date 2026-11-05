//добавляет в объект некие занчения
//принмает ключ и значение
export function assoc<K extends string, T>(key:K, value:T){
    //принимаем любой объект кот подходить под О
    //типизация   если в объект ы был ключ мы его заменяем, если нет-добавляем
    return <O extends object>(obj:O)=>({
        ...obj,//деструкция объекта
        [key]:value
        //расширяет ли 'К' 'O'
    }) as K extends keyof O ? (Omit<O, K>&Record<K, T>):(O&Record<K, T>)

} 