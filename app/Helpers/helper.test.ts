import {toFullname} from "./index";


test('Teste la concatténation', () => {
    expect(toFullname("Joe", 'Doe')).toEqual("Joe Doe");
});

