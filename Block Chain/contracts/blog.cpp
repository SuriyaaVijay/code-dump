#include <eosio/eosio.hpp>
#include <eosio/system.hpp>

using namespace eosio;
using std::string;

class [[eosio::contract]] blog_contract : public eosio::contract {
public:
    using contract::contract;

    [[eosio::action]]
    void initblog(name authority) {
        require_auth(authority);

        blog_table blogs(get_self(), get_self().value);
        auto iterator = blogs.begin();
        if (iterator == blogs.end()) {
            blogs.emplace(authority, [&](auto &new_blog) {
                new_blog.blog_id = blogs.available_primary_key();
                new_blog.current_post_key = 0;
                new_blog.authority = authority;
            });
        }
    }

    [[eosio::action]]
    void signupuser(name authority, string name, string avatar) {
        require_auth(authority);

        user_table users(get_self(), get_self().value);
        users.emplace(authority, [&](auto &new_user) {
            new_user.user_id = users.available_primary_key();
            new_user.name = name;
            new_user.avatar = avatar;
            new_user.authority = authority;
        });
    }

    [[eosio::action]]
    void createpost(name authority, string title, string content, name user) {
        require_auth(authority);

        blog_table blogs(get_self(), get_self().value);
        auto blog_itr = blogs.begin();
        eosio::check(blog_itr != blogs.end(), "Blog does not exist. Initialize the blog first.");

        post_table posts(get_self(), get_self().value);
        posts.emplace(authority, [&](auto &new_post) {
            new_post.post_id = posts.available_primary_key();
            new_post.title = title;
            new_post.content = content;
            new_post.user = user;
            new_post.authority = authority;
            new_post.pre_post_key = blog_itr->current_post_key;
        });

        blogs.modify(blog_itr, authority, [&](auto &blog) {
            blog.current_post_key = posts.available_primary_key();
        });
    }

private:
    struct [[eosio::table]] blog {
        uint64_t blog_id;
        uint64_t current_post_key;
        name authority;

        uint64_t primary_key() const { return blog_id; }
    };
    using blog_table = eosio::multi_index<"blogs"_n, blog>;

    struct [[eosio::table]] user {
        uint64_t user_id;
        string name;
        string avatar;
        name authority;

        uint64_t primary_key() const { return user_id; }
    };
    using user_table = eosio::multi_index<"users"_n, user>;

    struct [[eosio::table]] post {
        uint64_t post_id;
        string title;
        string content;
        name user;
        uint64_t pre_post_key;
        name authority;

        uint64_t primary_key() const { return post_id; }
    };
    using post_table = eosio::multi_index<"posts"_n, post>;
};

EOSIO_DISPATCH(blog_contract, (initblog)(signupuser)(createpost))
