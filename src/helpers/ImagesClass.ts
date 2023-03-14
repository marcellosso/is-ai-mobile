interface Image {
  name: string;
  image: any;
}
export class ImageClass {
  private static images: Image[] = [
    {
      name: 'fawn_in_the_forest_by_deskridge_dd2tubo-fullview.jpg',
      image: require('../../assets/levels/fawn_in_the_forest_by_deskridge_dd2tubo-fullview.jpg'),
    },
    {
      name: 'red_panda_digital_art_by_charfade_dauq6ng-fullview.jpg',
      image: require('../../assets/levels/red_panda_digital_art_by_charfade_dauq6ng-fullview.jpg'),
    },
    {
      name: 'dc9k9uu-97330f91-e174-4e08-888b-de045301df04.jpg',
      image: require('../../assets/levels/dc9k9uu-97330f91-e174-4e08-888b-de045301df04.jpg'),
    },
    {
      name: 'ddsw6dg-4cf6b21e-fa06-4448-9ec4-cde1a3ada194.jpg',
      image: require('../../assets/levels/ddsw6dg-4cf6b21e-fa06-4448-9ec4-cde1a3ada194.jpg'),
    },
    {
      name: 'last_train_to_trancentral_by_1ver4ik1_d8v77or-fullview.jpg',
      image: require('../../assets/levels/last_train_to_trancentral_by_1ver4ik1_d8v77or-fullview.jpg'),
    },
    {
      name: 'a_city_by_fmacmanus_d8fzwoo-fullview.jpg',
      image: require('../../assets/levels/a_city_by_fmacmanus_d8fzwoo-fullview.jpg'),
    },
    {
      name: 'faith___earth_by_tryingtofly_db3cslm-fullview.jpg',
      image: require('../../assets/levels/faith___earth_by_tryingtofly_db3cslm-fullview.jpg'),
    },
    {
      name: 'de61fme-1b67920a-eed3-4a72-aef3-28d4c50b708c.jpg',
      image: require('../../assets/levels/de61fme-1b67920a-eed3-4a72-aef3-28d4c50b708c.jpg'),
    },
    {
      name: 'd9c9oaf-9e07a2b1-de68-484a-accb-c53dc192d4ef.jpg',
      image: require('../../assets/levels/d9c9oaf-9e07a2b1-de68-484a-accb-c53dc192d4ef.jpg'),
    },
    {
      name: 'female_portrait_study_11_day__102_by_angelganev_d99wd2c-fullview.jpg',
      image: require('../../assets/levels/female_portrait_study_11_day__102_by_angelganev_d99wd2c-fullview.jpg'),
    },
    {
      name: 'dfravv1-88c2dcf2-56f5-4c51-8314-6d88e3219335.jpg',
      image: require('../../assets/levels/dfravv1-88c2dcf2-56f5-4c51-8314-6d88e3219335.jpg'),
    },
    {
      name: 'starcatcher_by_anleka_dfpxmvc-fullview.png',
      image: require('../../assets/levels/starcatcher_by_anleka_dfpxmvc-fullview.png'),
    },
    {
      name: 'dfqpsrs-7d79a54a-9e30-4ec0-9db2-4f6da8734c95.jpg',
      image: require('../../assets/levels/dfqpsrs-7d79a54a-9e30-4ec0-9db2-4f6da8734c95.jpg'),
    },
    {
      name: 'enter_the_colorverse_by_youvebeen0wned_dfqxk4f-fullview.jpg',
      image: require('../../assets/levels/enter_the_colorverse_by_youvebeen0wned_dfqxk4f-fullview.jpg'),
    },
    {
      name: 'dfqwl4c-d3a66da4-d00b-4aaa-8225-85ea75484b9d.png',
      image: require('../../assets/levels/dfqwl4c-d3a66da4-d00b-4aaa-8225-85ea75484b9d.png'),
    },
    {
      name: 'ia_final_output_89_by_atrabilisnull_dfr04zj-fullview.jpg',
      image: require('../../assets/levels/ia_final_output_89_by_atrabilisnull_dfr04zj-fullview.jpg'),
    },
    {
      name: 'dfqzerz-f8ea3ba0-bc8f-4740-917c-4bd4ce451bed.jpg',
      image: require('../../assets/levels/dfqzerz-f8ea3ba0-bc8f-4740-917c-4bd4ce451bed.jpg'),
    },
    {
      name: 'dfr25fl-f32aaed5-41da-49aa-b95b-9aee31b0b9b5.jpg',
      image: require('../../assets/levels/dfr25fl-f32aaed5-41da-49aa-b95b-9aee31b0b9b5.jpg'),
    },
    {
      name: 'dfr2hq5-5c25db36-430f-413e-af21-984ac0cdc9ea.png',
      image: require('../../assets/levels/dfr2hq5-5c25db36-430f-413e-af21-984ac0cdc9ea.png'),
    },
    {
      name: 'the_forest_without_merchant_by_adriencastex_dfr1nn1-fullview.jpg',
      image: require('../../assets/levels/the_forest_without_merchant_by_adriencastex_dfr1nn1-fullview.jpg'),
    },
    {
      name: 'dark_foggy_forest_by_justwithnoname_dfrac3r-fullview.jpg',
      image: require('../../assets/levels/dark_foggy_forest_by_justwithnoname_dfrac3r-fullview.jpg'),
    },
    {
      name: 'harm-gerdes.png',
      image: require('../../assets/levels/harm-gerdes.png'),
    },
    {
      name: 'dfr4gei-b2f64c4d-4dad-4a24-a288-3ea99db49b2d.png',
      image: require('../../assets/levels/dfr4gei-b2f64c4d-4dad-4a24-a288-3ea99db49b2d.png'),
    },
    {
      name: 'shipwreck_by_sugoidigi_dfr6ryj-fullview.jpg',
      image: require('../../assets/levels/shipwreck_by_sugoidigi_dfr6ryj-fullview.jpg'),
    },
    {
      name: 'forest_of_fruit_trees_by_fantasiarium_dfrbhpy-fullview.jpg',
      image: require('../../assets/levels/forest_of_fruit_trees_by_fantasiarium_dfrbhpy-fullview.jpg'),
    },
    {
      name: 'dfra2af-fbc64aa9-16b7-4840-985d-142e4618c657.jpg',
      image: require('../../assets/levels/dfra2af-fbc64aa9-16b7-4840-985d-142e4618c657.jpg'),
    },
    {
      name: 'dfr7kp5-46bd0d1e-4112-401e-a9db-64c84f6a783b.jpg',
      image: require('../../assets/levels/dfr7kp5-46bd0d1e-4112-401e-a9db-64c84f6a783b.jpg'),
    },
    {
      name: 'along_the_helium_line_by_shootingstarlogbook_dfrc0hy-fullview.jpg',
      image: require('../../assets/levels/along_the_helium_line_by_shootingstarlogbook_dfrc0hy-fullview.jpg'),
    },
    {
      name: 'dfrc5qo-25ad5968-84f9-41bc-9c7c-5b4b6c5f3c61.jpg',
      image: require('../../assets/levels/dfrc5qo-25ad5968-84f9-41bc-9c7c-5b4b6c5f3c61.jpg'),
    },
    {
      name: 'truth_beyond_reality_navigating_the_map_of_my_mind_by_oanarinaldi_dfqapr3-fullview.jpg',
      image: require('../../assets/levels/truth_beyond_reality_navigating_the_map_of_my_mind_by_oanarinaldi_dfqapr3-fullview.jpg'),
    },
    {
      name: 'the_sound_of_silence_by_naouriredouane1998_dfoutip-fullview.jpg',
      image: require('../../assets/levels/the_sound_of_silence_by_naouriredouane1998_dfoutip-fullview.jpg'),
    },
    {
      name: 'growing_and_knowing_by_ni_nig_dfqq6mq-fullview.jpg',
      image: require('../../assets/levels/growing_and_knowing_by_ni_nig_dfqq6mq-fullview.jpg'),
    },
    {
      name: 'dfr47v9-7ff34525-8a84-43a8-847b-a06fe0cd9207.png',
      image: require('../../assets/levels/dfr47v9-7ff34525-8a84-43a8-847b-a06fe0cd9207.png'),
    },
    {
      name: 'dfr8uzy-62da8a66-43ff-4131-901e-35eb0af32074.jpg',
      image: require('../../assets/levels/dfr8uzy-62da8a66-43ff-4131-901e-35eb0af32074.jpg'),
    },
    {
      name: 'desert_castle_by_davidevart_dfrbea1-fullview.jpg',
      image: require('../../assets/levels/desert_castle_by_davidevart_dfrbea1-fullview.jpg'),
    },
    {
      name: 'sky_by_danielbogni_dfp0834-fullview.jpg',
      image: require('../../assets/levels/sky_by_danielbogni_dfp0834-fullview.jpg'),
    },
    {
      name: '6f93a858-ad40-4879-b9c7-d000757fb134.jpg',
      image: require('../../assets/levels/6f93a858-ad40-4879-b9c7-d000757fb134.jpg'),
    },
    {
      name: '620dd682-e928-4000-9c5f-5f0c7fcfe9d8.jpg',
      image: require('../../assets/levels/620dd682-e928-4000-9c5f-5f0c7fcfe9d8.jpg'),
    },
    {
      name: '86fdc495-00b0-4ab3-8cbe-49a4b1cff482.jpg',
      image: require('../../assets/levels/86fdc495-00b0-4ab3-8cbe-49a4b1cff482.jpg'),
    },
    {
      name: '384579e4-7527-4d79-9b0f-4b97cdf1998b.jpg',
      image: require('../../assets/levels/384579e4-7527-4d79-9b0f-4b97cdf1998b.jpg'),
    },
    {
      name: '161a6b52-5be8-4393-8b07-38469a7e2a24.jpg',
      image: require('../../assets/levels/161a6b52-5be8-4393-8b07-38469a7e2a24.jpg'),
    },
    {
      name: '66234950-8a07-4e4b-9533-93c86748af50.jpg',
      image: require('../../assets/levels/66234950-8a07-4e4b-9533-93c86748af50.jpg'),
    },
    {
      name: 'b3f67b7f-be52-4a42-b6ab-471ac54bf017.jpg',
      image: require('../../assets/levels/b3f67b7f-be52-4a42-b6ab-471ac54bf017.jpg'),
    },
    {
      name: '36d894e5-efe9-4b71-bc5b-ce24a467098d.jpg',
      image: require('../../assets/levels/36d894e5-efe9-4b71-bc5b-ce24a467098d.jpg'),
    },
    {
      name: 'cfcba0b6-25ea-4ade-b6de-96ac0f5c09b3.jpg',
      image: require('../../assets/levels/cfcba0b6-25ea-4ade-b6de-96ac0f5c09b3.jpg'),
    },
    {
      name: '9a91b758-64fb-4623-b5eb-ab300e42bff0.jpg',
      image: require('../../assets/levels/9a91b758-64fb-4623-b5eb-ab300e42bff0.jpg'),
    },
    {
      name: 'b0e9224f-4575-4990-b4dd-9fee01e0a07c.jpg',
      image: require('../../assets/levels/b0e9224f-4575-4990-b4dd-9fee01e0a07c.jpg'),
    },
    {
      name: '27155a55-3c9c-43b8-a7e3-a93b2c25aa64.jpg',
      image: require('../../assets/levels/27155a55-3c9c-43b8-a7e3-a93b2c25aa64.jpg'),
    },
    {
      name: '7231d5a2-cd26-4e82-ab88-bf081cf2f3d2.jpg',
      image: require('../../assets/levels/7231d5a2-cd26-4e82-ab88-bf081cf2f3d2.jpg'),
    },
    {
      name: '0acc4f5f-a51b-4fe7-9ee4-47d191ef5e5e.jpg',
      image: require('../../assets/levels/0acc4f5f-a51b-4fe7-9ee4-47d191ef5e5e.jpg'),
    },
    {
      name: 'dde898ba-41c2-47f5-bcf0-3956149cecf4.jpg',
      image: require('../../assets/levels/dde898ba-41c2-47f5-bcf0-3956149cecf4.jpg'),
    },
    {
      name: '49c379ee-2354-4d0e-a136-418be446e34d.jpg',
      image: require('../../assets/levels/49c379ee-2354-4d0e-a136-418be446e34d.jpg'),
    },
    {
      name: 'd4b3b3a6-3131-4310-931d-422f91838824.jpg',
      image: require('../../assets/levels/d4b3b3a6-3131-4310-931d-422f91838824.jpg'),
    },
    {
      name: '3e45a851-f086-4264-be74-5a7ee73867fa.jpg',
      image: require('../../assets/levels/3e45a851-f086-4264-be74-5a7ee73867fa.jpg'),
    },
    {
      name: '4567c4ab-44d5-4179-8269-5d108f5f46d4.jpg',
      image: require('../../assets/levels/4567c4ab-44d5-4179-8269-5d108f5f46d4.jpg'),
    },
    {
      name: '4767e0c9-a73a-4140-8f33-1d8a9f335fe2.jpg',
      image: require('../../assets/levels/4767e0c9-a73a-4140-8f33-1d8a9f335fe2.jpg'),
    },
    {
      name: 'dc77cde6-990e-4dae-a1c4-d4581efc6b91.jpg',
      image: require('../../assets/levels/dc77cde6-990e-4dae-a1c4-d4581efc6b91.jpg'),
    },
    {
      name: '787e70d1-68a9-4d08-a9f0-05b797467255.jpg',
      image: require('../../assets/levels/787e70d1-68a9-4d08-a9f0-05b797467255.jpg'),
    },
    {
      name: 'bc592247-ba64-4b0b-8eac-27c67285bf14.jpg',
      image: require('../../assets/levels/bc592247-ba64-4b0b-8eac-27c67285bf14.jpg'),
    },
    {
      name: '53b6c18d-6ad3-4b49-be47-3568c26f727b.jpg',
      image: require('../../assets/levels/53b6c18d-6ad3-4b49-be47-3568c26f727b.jpg'),
    },
    {
      name: '4544c44b-07fb-4aec-8df8-661b4bad3abb.jpg',
      image: require('../../assets/levels/4544c44b-07fb-4aec-8df8-661b4bad3abb.jpg'),
    },
    {
      name: '7a7efa27-9df7-48da-86ff-fc074740faf1.jpg',
      image: require('../../assets/levels/7a7efa27-9df7-48da-86ff-fc074740faf1.jpg'),
    },
    {
      name: '99c25e46-e858-42c1-9d13-c65e5d2a8b2d.jpg',
      image: require('../../assets/levels/99c25e46-e858-42c1-9d13-c65e5d2a8b2d.jpg'),
    },
    {
      name: '1fc75be7-1040-4a86-9cdf-7de501c043c3.jpg',
      image: require('../../assets/levels/1fc75be7-1040-4a86-9cdf-7de501c043c3.jpg'),
    },
    {
      name: '7757889e-7806-4ec5-bce5-ea7e440903a4.jpg',
      image: require('../../assets/levels/7757889e-7806-4ec5-bce5-ea7e440903a4.jpg'),
    },
    {
      name: '55177c18-338a-4b1a-bd2d-d9d2d405756d.jpg',
      image: require('../../assets/levels/55177c18-338a-4b1a-bd2d-d9d2d405756d.jpg'),
    },
    {
      name: 'a6b3f606-a235-40e7-a55b-402b9158322d.jpg',
      image: require('../../assets/levels/a6b3f606-a235-40e7-a55b-402b9158322d.jpg'),
    },
    {
      name: '4c0282c5-852f-48cf-8ec3-f0f1446c22a2.jpg',
      image: require('../../assets/levels/4c0282c5-852f-48cf-8ec3-f0f1446c22a2.jpg'),
    },
    {
      name: '9f04936a-058e-4373-8f8e-80d8ed738af6.jpg',
      image: require('../../assets/levels/9f04936a-058e-4373-8f8e-80d8ed738af6.jpg'),
    },
    {
      name: '4b11b1d0-2d22-4dfc-8fe6-5f5052c69c90.jpg',
      image: require('../../assets/levels/4b11b1d0-2d22-4dfc-8fe6-5f5052c69c90.jpg'),
    },
    {
      name: '9b8f4757-ede0-4b80-aaaf-2ce3b6e186f4.jpg',
      image: require('../../assets/levels/9b8f4757-ede0-4b80-aaaf-2ce3b6e186f4.jpg'),
    },
    {
      name: '48d91529-44f4-454c-9a00-adb7dbc03a35.jpg',
      image: require('../../assets/levels/48d91529-44f4-454c-9a00-adb7dbc03a35.jpg'),
    },
    {
      name: '19224da5-a013-4e30-b0d1-089e78bb2fd2.jpg',
      image: require('../../assets/levels/19224da5-a013-4e30-b0d1-089e78bb2fd2.jpg'),
    },
    {
      name: 'bf261cdc-0e08-459e-81c1-f8a3ea282523.jpg',
      image: require('../../assets/levels/bf261cdc-0e08-459e-81c1-f8a3ea282523.jpg'),
    },
    {
      name: '41c5abf6-b610-48f0-b3f8-ca029b6c22d6.jpg',
      image: require('../../assets/levels/41c5abf6-b610-48f0-b3f8-ca029b6c22d6.jpg'),
    },
    {
      name: '3ca40a55-32e4-4ba4-801e-d623e6b1b848.jpg',
      image: require('../../assets/levels/3ca40a55-32e4-4ba4-801e-d623e6b1b848.jpg'),
    },
    {
      name: 'b6347c40-3f6f-4917-95dc-dcd52d6f92ea.jpg',
      image: require('../../assets/levels/b6347c40-3f6f-4917-95dc-dcd52d6f92ea.jpg'),
    },
    {
      name: '5f0ac9ca-3d22-4bf0-b696-8f72d251d02c.jpg',
      image: require('../../assets/levels/5f0ac9ca-3d22-4bf0-b696-8f72d251d02c.jpg'),
    },
    {
      name: 'fe29f6f9-2943-4374-9120-c24fd71dfe00.jpg',
      image: require('../../assets/levels/fe29f6f9-2943-4374-9120-c24fd71dfe00.jpg'),
    },
    {
      name: '67cebeb3-e029-48de-b116-64215dac2fc8.jpg',
      image: require('../../assets/levels/67cebeb3-e029-48de-b116-64215dac2fc8.jpg'),
    },
    {
      name: '580137d9-546a-4fd6-aa05-1b889eb6bfe4.jpg',
      image: require('../../assets/levels/580137d9-546a-4fd6-aa05-1b889eb6bfe4.jpg'),
    },
    {
      name: 'dcae1bf2-57bf-4475-9532-22b9c42a9ea3.jpg',
      image: require('../../assets/levels/dcae1bf2-57bf-4475-9532-22b9c42a9ea3.jpg'),
    },
    {
      name: '6d57260d-42c4-423a-9a18-0a2de50a1807.jpg',
      image: require('../../assets/levels/6d57260d-42c4-423a-9a18-0a2de50a1807.jpg'),
    },
    {
      name: '422ace99-c1fc-45ca-8ccf-4a25cc032cd7.jpg',
      image: require('../../assets/levels/422ace99-c1fc-45ca-8ccf-4a25cc032cd7.jpg'),
    },
    {
      name: 'f66ae2f5-b82d-4a00-b966-c0f91b88dce8.jpg',
      image: require('../../assets/levels/f66ae2f5-b82d-4a00-b966-c0f91b88dce8.jpg'),
    },
    {
      name: '5a01e006-99e6-4c66-b346-400481ccfa59.jpg',
      image: require('../../assets/levels/5a01e006-99e6-4c66-b346-400481ccfa59.jpg'),
    },
    {
      name: 'ae0cfc10-364a-4cae-8060-61c34c0fc16b.jpg',
      image: require('../../assets/levels/ae0cfc10-364a-4cae-8060-61c34c0fc16b.jpg'),
    },
    {
      name: 'ac435bf0-f411-4391-9426-559db95ce3d9.jpg',
      image: require('../../assets/levels/ac435bf0-f411-4391-9426-559db95ce3d9.jpg'),
    },
    {
      name: 'af2df5ab-409b-41d4-b44f-bc31938d67d6.jpg',
      image: require('../../assets/levels/af2df5ab-409b-41d4-b44f-bc31938d67d6.jpg'),
    },
    {
      name: '03e7b3b6-0d61-4d78-a90b-87e290c5fb06.jpg',
      image: require('../../assets/levels/03e7b3b6-0d61-4d78-a90b-87e290c5fb06.jpg'),
    },
    {
      name: 'a86a8ed9-3ad8-47cc-82b8-54e587a66f09.jpg',
      image: require('../../assets/levels/a86a8ed9-3ad8-47cc-82b8-54e587a66f09.jpg'),
    },
    {
      name: '046aec77-50be-4b07-abc0-3c7483fa4f6e.jpg',
      image: require('../../assets/levels/046aec77-50be-4b07-abc0-3c7483fa4f6e.jpg'),
    },
    {
      name: '1d4ef9f5-383e-417d-bffa-b224a449a3aa.jpg',
      image: require('../../assets/levels/1d4ef9f5-383e-417d-bffa-b224a449a3aa.jpg'),
    },
    {
      name: 'deac75d5-f545-4123-9065-218b0c483a45.jpg',
      image: require('../../assets/levels/deac75d5-f545-4123-9065-218b0c483a45.jpg'),
    },
    {
      name: '801df5ca-7e1d-4372-9579-a35c0ccb4f00.jpg',
      image: require('../../assets/levels/801df5ca-7e1d-4372-9579-a35c0ccb4f00.jpg'),
    },
    {
      name: '8ab75d7b-066e-428d-b94e-5bdf7c8f770a.jpg',
      image: require('../../assets/levels/8ab75d7b-066e-428d-b94e-5bdf7c8f770a.jpg'),
    },
    {
      name: 'cb35beb7-5154-4f1e-a44a-7d1eb7f9c578.jpg',
      image: require('../../assets/levels/cb35beb7-5154-4f1e-a44a-7d1eb7f9c578.jpg'),
    },
    {
      name: '031374a8-a65c-43c2-80e9-ec81a2443ed8.jpg',
      image: require('../../assets/levels/031374a8-a65c-43c2-80e9-ec81a2443ed8.jpg'),
    },
    {
      name: 'ai-salmao.jpg',
      image: require('../../assets/levels/ai-salmao.jpg'),
    },
  ];

  static GetImage = (name: string) => {
    const found = ImageClass.images.find((e) => e.name === name);
    return found ? found.image : null;
  };
}
