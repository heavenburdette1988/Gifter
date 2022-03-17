using Gifter.Models;
using System.Collections.Generic;

namespace Gifter.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile user);
        UserProfile GetByEmail(string email);

        void Delete(int id);
        void Update(UserProfile user);
        List<UserProfile> GetAll();
        UserProfile GetById(int id);
        UserProfile GetUserProfileIdWithPostsAndComments(int id);


    }
}